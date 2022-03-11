use axum::Json;
use models::Catalog;

use crate::controllers::connector_images::routes;
use crate::controllers::connectors::routes as connector_routes;
use crate::controllers::json_api::{DocumentData, Links, Many, One, RawJson, Resource};
use crate::models::connector_images::ConnectorImage;
use crate::models::connectors::{Connector, ConnectorOperation};
use crate::models::id::Id;

pub mod discovery;

pub fn index(images: Vec<ConnectorImage>) -> Json<Many<ConnectorImage>> {
    let resources = images.into_iter().map(Resource::from).collect();
    let links = Links::default().put("self", routes::index());
    Json(DocumentData::new(resources, links))
}

pub fn create(image: ConnectorImage) -> Json<One<ConnectorImage>> {
    let resource = DocumentData::new(Resource::<ConnectorImage>::from(image), Links::default());
    Json(resource)
}

pub fn show(image: ConnectorImage) -> Json<One<ConnectorImage>> {
    let resource = DocumentData::new(Resource::<ConnectorImage>::from(image), Links::default());
    Json(resource)
}

pub fn spec(connector: Connector, image: ConnectorImage, spec: RawJson) -> Json<One<RawJson>> {
    let mut links = Links::default()
        .put("self", routes::spec(image.id))
        .put("image", routes::show(image.id))
        .put("connector", connector_routes::show(image.connector_id));

    if connector.supports(ConnectorOperation::Discover) {
        links = links.put("discovered_catalog", routes::discovered_catalog(image.id))
    }

    let resource = Resource {
        id: Id::nonce(),
        r#type: "connector_spec",
        attributes: spec,
        links,
    };
    Json(DocumentData::new(resource, Links::default()))
}

pub fn discovered_catalog(
    catalog: discovery::DiscoveredCatalog,
) -> Result<Json<One<Catalog>>, serde_json::Error> {
    let links = Links::default()
        .put("self", routes::discovered_catalog(catalog.image().id))
        // put("builds", "/builds")
        .put("image", routes::show(catalog.image().id));

    let resource = Resource {
        id: Id::nonce(),
        r#type: "discovered_catalog",
        attributes: catalog.root_catalog()?,
        links: Links::default(),
    };

    Ok(Json(DocumentData::new(resource, links)))
}

impl From<ConnectorImage> for Resource<ConnectorImage> {
    fn from(image: ConnectorImage) -> Self {
        let links = Links::default()
            .put("self", routes::show(image.id))
            .put("spec", routes::spec(image.id))
            .put("connector", connector_routes::show(image.connector_id));

        Resource {
            id: image.id,
            r#type: "connector_image",
            attributes: image,
            links,
        }
    }
}
