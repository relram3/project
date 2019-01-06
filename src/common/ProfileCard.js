import React, { Component } from "react";
import "../styles/profileCard.scss";
import $ from "jquery";

export default class ProfileCard extends Component {
  componentDidMount = () => {
    $(".card-toggle").on("click", function() {
      // Card toggle state
      $(".card-toggle").removeClass("active");
      $(this).addClass("active");

      var isAnimating = false;

      if (!isAnimating) {
        isAnimating = true;

        $(".card")
          .find(".card-content")
          .css("z-index", 0);
        $(".card").removeClass("active");

        var that = $(this);

        $(this)
          .siblings()
          .css("z-index", 1);

        setTimeout(function() {
          that
            .parent()
            .toggleClass("active")
            .find(".card-content")
            .on("transitionend", function() {
              isAnimating = false;
            });
        }, 10);
      } else {
        return;
      }
    });

    $("input,textarea").blur(function() {
      if ($(this).val()) {
        $(this)
          .parent()
          .addClass("filled");
      } else {
        $(this)
          .parent()
          .removeClass("filled");
      }
    });

    $(".contact").on("click", function() {
      $(".contact-form").toggleClass("active");
    });
    $(".contact-form input[type=submit], .contact-form .close").on(
      "click",
      function(e) {
        e.preventDefault();
        $(".contact-form").toggleClass("active");
      }
    );
  };
  render() {
    return (
      <div class="cards">
        <div class="contact">Contact Me</div>
        <div class="contact-form">
          <a href="#" class="close">
            <i class="fa fa-times" />
          </a>
          <form>
            <div class="control">
              <input type="text" id="name" />
              <label for="name">Your Name</label>
            </div>
            <div class="control">
              <input type="text" id="email" />
              <label for="email">Email Address</label>
            </div>
            <div class="control">
              <input type="text" id="url" />
              <label for="url">Website</label>
            </div>
            <div class="control">
              <textarea name="" id="message" />
              <label for="message">Message</label>
            </div>
            <div class="control submit">
              <input type="submit" />
            </div>
          </form>
        </div>

        <div class="card active" id="overview">
          <a class="card-toggle">
            <i class="fa fa-arrow-circle-left" />
          </a>
          <div class="card-content">
            <div class="row">
              <div class="left col">
                <h2>
                  Personal <strong>Social Card</strong>
                </h2>

                <p>
                  Click one of the social icons below to switch between card or
                  click Contact Me link to show the contact form card. <br />
                  <em>
                    Make sure you're running this experiment in the latest
                    Chrome browser.
                  </em>
                </p>
              </div>
              <div class="right col" />
            </div>
          </div>
        </div>

        <div class="card" id="dribbble">
          <a class="card-toggle">
            <i>
              <span class="fa fa-dribbble" />
            </i>
          </a>
          <div class="card-content">
            <div class="row">
              <div class="left col">
                <h2>
                  My <strong>Dribbble</strong>
                </h2>

                <p>
                  In ipsa reiciendis, eligendi labore dolores delectus facere
                  perferendis ex architecto reprehenderit maxime exercitationem,
                  libero itaque, at voluptatibus! Sit obcaecati repellat
                  incidunt accusantium voluptas suscipit a consequuntur
                  repudiandae nulla eius.
                </p>
              </div>
              <div class="right col">
                <img
                  src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div class="card" id="behance">
          <a class="card-toggle">
            <i>
              <span class="fa fa-behance" />
            </i>
          </a>
          <div class="card-content">
            <div class="row">
              <div class="left col">
                <h2>
                  My <strong>Behance</strong>
                </h2>
                <p>
                  Quia fugit animi, iure error veritatis? Ipsa quis, deserunt
                  illum culpa ab id mollitia nesciunt commodi aut dolores vero
                  ipsam ut minima neque nam excepturi corporis obcaecati
                  consequuntur accusantium laborum!
                </p>
              </div>
              <div class="right col">
                <img
                  src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card" id="linkedin">
          <a class="card-toggle">
            <i>
              <span class="fa fa-linkedin" />
            </i>
          </a>
          <div class="card-content">
            <div class="row">
              <div class="left col">
                <h2>
                  My <strong>LinkedIn</strong>
                </h2>

                <p>
                  Voluptas aliquam, perferendis laboriosam, cumque, autem vero
                  pariatur dolorum tempora sint hic laborum distinctio suscipit
                  magnam, porro provident maxime labore. Porro vel error quaerat
                  consequatur sapiente? Nostrum at voluptatibus necessitatibus.
                </p>
              </div>
              <div class="right col">
                <img
                  src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card" id="twitter">
          <a class="card-toggle">
            <i>
              <span class="fa fa-twitter" />
            </i>
          </a>
          <div class="card-content">
            <div class="row">
              <div class="left col">
                <h2>
                  My <strong>Twitter</strong>
                </h2>

                <p>
                  Fugit veniam, animi architecto doloribus veritatis vitae sint
                  doloremque possimus quae. Pariatur libero, veniam voluptatibus
                  alias distinctio qui nostrum debitis voluptate amet hic
                  repellat officiis nam quos vel doloremque praesentium.
                </p>
              </div>
              <div class="right col">
                <img
                  src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
