import React, { Component } from 'react'

class Cases extends Component {
    render() {
        return (
            <div className="cases">
                <h1 id = 'header'>Cases We Handle <hr className = 'hrCases'></hr> </h1>
                <div className = 'cards'>
                        <div className = 'details-1'>
                            <h3>Our Vision</h3>
                            Founded in 2013, our firm has been providing effective, affordable and often untraditional legal solution to our hundreds of clients over the years. Our law firm work with remarkable team of expert attorneys in just about every field of law you can name, and it is because of this comprehensive nature of the legal services we provide, our firm has been able to stay ahead of its competitors.
                        </div>
                        <div className = 'details-2'>
                            <h3>Who We Are</h3>
                            <span>
                                Headed by one of the young, talented, and creative lawyers in the area, Bayarjargal Sereenen, our firm have a sound base in the law fraternity, and we aim to put our resources to effective use for the success of our clients.  Thus, you can rest assured that your case is in safe hands with.
                            </span>
                        </div>
                                      
                        <div className = 'details-3'>
                        <h3> Our Mission</h3>
                        Headed by one of the young, talented, and creative lawyers in the area, Bayarjargal Sereenen, our firm have a sound base in the law fraternity, and we aim to put our resources to effective use for the success of our clients.  Thus, you can rest assured that your case is in safe hands with.
                        </div>
                </div>
            </div>
        )
    }
}

export default Cases;