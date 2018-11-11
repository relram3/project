import React, { Component } from 'react'

class BlogEntries extends Component {
    render() {
        return (
            <div class="blogEntries">
                <h1 id = 'header'>Recent Blog Entries <hr className = 'hrBlog'></hr> </h1>
                <div className = 'cards'>
                    <div className = 'details-1'>
                        <a href="http://tsegtslawgroup.com/2017/04/07/the-petition-fee-for-h1b-has-been-increased/">
                            <img className = 'blogEntry' src="http://tsegtslawgroup.com/wp-content/uploads/2017/04/blog1.jpg" alt="THE PETITION FEE FOR H1B HAS BEEN INCREASED!"></img>
                        </a>
                        <div className = 'comments'>
                            <a href="http://tsegtslawgroup.com/2017/04/07/" className="post-date">
                                <time datetime="2017-04-07T17:59:58+00:00" title="2017-04-07T17:59:58+00:00">07 Apr 2017</time>
                            </a>
                            <a href="http://tsegtslawgroup.com/2017/04/07/the-petition-fee-for-h1b-has-been-increased/#respond" className="post-comments-count">0 comments</a>
                        </div>
                        <h1>
                            <a className = 'title' href="http://tsegtslawgroup.com/2017/04/07/the-petition-fee-for-h1b-has-been-increased/" title="THE PETITION FEE FOR H1B HAS BEEN INCREASED!" rel="bookmark">THE PETITION FEE FOR H1B HAS BEEN INCREASED!</a>
                        </h1>
                        <div class="legalalienposts_item_excerpt">
                            H-1B visa petition fee has been increased by $4000 on Friday, December 18, 2015, by a new US Congress bill…
                            <hr className = 'hrExcerpt'></hr>
                        </div>
                    </div>

                    <div className = 'details-2'>
                        <a href="http://tsegtslawgroup.com/2017/04/07/usa-citizen-boloh-usa-army-mavni-program/">
                            <img className = 'blogEntry' src="http://tsegtslawgroup.com/wp-content/uploads/2017/04/blog2.jpg" alt="USA Citizen boloh USA Army MAVNI Program"></img>
                        </a>
                        <div className = 'comments'>
                            <a href="http://tsegtslawgroup.com/2017/04/07/" className="post-date">
                                <time datetime="2017-04-07T17:59:58+00:00" title="2017-04-07T17:59:58+00:00">07 Apr 2017</time>
                            </a>
                            <a href="http://tsegtslawgroup.com/2017/04/07/usa-citizen-boloh-usa-army-mavni-program/#respond" className="post-comments-count">0 comments</a>
                        </div>
                        <h1>
                            <a className = 'title' href="http://tsegtslawgroup.com/2017/04/07/usa-citizen-boloh-usa-army-mavni-program/" title="USA Citizen boloh USA Army MAVNI Program" rel="bookmark">USA Citizen boloh USA Army MAVNI Program</a>
                        </h1>
                        <div class="legalalienposts_item_excerpt">
                            АНУ- Арми ийн АНУ – иргэншил олгох МАВНИ Программ MAVNI: Military Accessions Vital To The National Interest Хэрвээ та АНУ-д…
                            <hr className = 'hrExcerpt'></hr>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogEntries;