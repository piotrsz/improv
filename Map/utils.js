function makeCityPointFeature (city) {
    return {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: city.coords
        },
        properties: {
            name: city.name,
            pop: city.population,
            area: city.area,
            radius: city.radius,
            factor: city.factor,
            ts: city.ts,
            cig: city.cig
        }
    }
}

function makeConnection (src, dst) {
    return {
        type: "Feature",
        geometry: {
            type: "LineString",
            coordinates: [src.coords, dst.coords]
        }
    }            
}