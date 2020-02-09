import React, { Component } from 'react'

export default class Tour extends Component {
    
    render() {
        const tours = [
          { id: 1, date: "29 NOV", title: "DUBLIN - OPIUM - IRL" },
          { id: 2, date: "06 DEC", title: "BRUSSELS - MIRANO - BEL" },
          { id: 3, date: "07 DEC", title: "ISTANBUL - GENERIC MUSIC - TUR" },
          { id: 4, date: "12 DEC", title: "CAIRO - CLUB M - EGY " },
          {
            id: 5,
            date: "13 DEC",
            title: "DUBAI - TBA - ARE (*Thorben solo set)",
          },
          {
            id: 6,
            date: "14 DEC",
            title: "HAMBURG - KNUST - DEU *CONCERT & RELEASE PARTY",
          },
          { id: 7, date: "19 DEC", title: "MUNICH - BAHNWÄRTER THIEL - DEU" },
          { id: 8, date: "20 DEC", title: "KÖLN - ODONIEN - DEU" },
          { id: 9, date: "22 DEC", title: "BEIRUT - D BEIRUT - LBN" },
          {
            id: 10,
            date: "31 DEC",
            title: "AMSTERDAM - GARDENS OF BABYLON - NLD",
          },
          { id: 11, date: "17 JAN", title: "TUNIS - TBA - TUN" },
          { id: 12, date: "31 JAN", title: "STOCKHOLM - STUDIO LIVE - SWE" },
          { id: 13, date: "01 FEB", title: "WIEN - TBA - AUT" },
          { id: 14, date: "07 FEB", title: "BERLIN - SÄÄLCHEN - DEU" },
          { id: 15, date: "12 FEB", title: "PARIS - NEW MORNING - FRA" },
          {
            id: 16,
            date: "14 FEB",
            title: "ZÜRICH - JENSEITS IM VIADUKT - CHE",
          },
          { id: 17, date: "22 FEB", title: "BARCELONA - TBA - ESP" },
          { id: 18, date: "28 FEB", title: "LONDON - JAZZ CAFE - GB" },
          {
            id: 19,
            date: "06 MAR",
            title: "DOHA - TBA - QAT (*Thorben solo set)",
          },
        ]
        return (
            <div className="slide">
                <div className="page">
                    <div className="grid">
                        <div className="texted-content">
                            <div className="tour">
                                <ul className="tour-list">
                                {tours.map((tour) =>
                                    <li key={tour.id}>
                                        <span className="date">{tour.date}</span>
                                        <span className="title">{tour.title}</span>
                                    </li>
                                )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
