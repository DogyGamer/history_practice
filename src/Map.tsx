import { Clusterer, Map, Placemark } from "@pbe/react-yandex-maps"
import { objects, points } from "./Constants"

export const FullMap = () => {
    return (
        <div> 
            <h2>Интерактивная карта НПК СПБ</h2>
            <p>На этой карте отмечены все обьекты, так же вы можете перейти в список и посмотреть карточки каждого из экспонатов и связанные с ними места</p>
            <div className="col-12 w-100" style={{height: "600px"}}>
                <Map style={{width: "100%", height: "100%"}} defaultState={{ center: [59.9417, 30.3325], zoom: 9 }}> 
                    <Clusterer
                    options={{
                        groupByCoordinates: false,
                    }}
                    >
                    {points.map((point, index) => (
                        <Placemark
                    key={index}
                    geometry={[point.latitude, point.longitude]}
                    properties={{
                      balloonContentHeader: point.title,
                      balloonContentBody: point.description+`<br/><b><a href="/history_practice/#/object/${point.parentid}">Подробнее: ${objects.filter(e => e.id === point.parentid)[0].title}</a></b>`,
                      balloonContentFooter: `<small>${point.address}</small>`
                    }}
                    options={{
                      preset: 'islands#blueIcon',
                      hideIconOnBalloonOpen: false,
                    }}
                    modules={['geoObject.addon.balloon']}
                  />
                    ))}
                    </Clusterer>

                </Map>
            </div>
        </div>
    )
}