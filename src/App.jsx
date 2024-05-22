import React from "react";

function App() {
  return (
    <div>
      <header>
        <div className="header-link">
          <a className="home" href="">
            sneakers
          </a>
          <ul>
            <a>Collection</a>
            <a>Men</a>
            <a>Women</a>
            <a>About</a>
            <a>Contact</a>
          </ul>
        </div>
        <div className="ava">
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Cart</h3>
                <hr />
                <p className="py-4">Your cart is empty. </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <img src="./images/icon-cart.svg" width={22} height={20} alt="" />
          </button>{" "}
          <img src="./images/image-avatar.png" width={50} height={50} alt="" />
        </div>
      </header>
      <main>
        <div>
          <img
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="cros"
            src="../public/images/image-product-1.jpg"
            width={445}
            height={445}
            alt=""
          />
          <dialog id="my_modal_2" className="modal-2">
            <div className="modal-box">
              <img
                className="cros"
                src="../public/images/image-product-1.jpg"
                width={445}
                height={445}
                alt=""
              />
              <div class="swiper-container galleryThumbs">
                <img
                  src="../public/images/image-product-1-thumbnail.jpg"
                  width={88}
                  height={88}
                  alt=""
                />

                <button>
                  {" "}
                  <img
                    src="../public/images/image-product-2-thumbnail.jpg"
                    width={88}
                    height={88}
                    alt=""
                  />
                </button>
                <button>
                  {" "}
                  <img
                    src="../public/images/image-product-3-thumbnail.jpg"
                    width={88}
                    height={88}
                    alt=""
                  />
                </button>
                <button>
                  {" "}
                  <img
                    src="../public/images/image-product-4-thumbnail.jpg"
                    width={88}
                    height={88}
                    alt=""
                  />
                </button>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <div class="swiper-container galleryThumbs">
            <img
              src="../public/images/image-product-1-thumbnail.jpg"
              width={88}
              height={88}
              alt=""
            />

            <button>
              {" "}
              <img
                src="../public/images/image-product-2-thumbnail.jpg"
                width={88}
                height={88}
                alt=""
              />
            </button>
            <button>
              {" "}
              <img
                src="../public/images/image-product-3-thumbnail.jpg"
                width={88}
                height={88}
                alt=""
              />
            </button>
            <button>
              {" "}
              <img
                src="../public/images/image-product-4-thumbnail.jpg"
                width={88}
                height={88}
                alt=""
              />
            </button>
          </div>
        </div>

        <section className="sec-2">
          <h5>Sneaker Company</h5>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <h3>$125.00</h3>
          <div className="chek">
            {" "}
            <div className="kop">
              <button className="btn-1"></button>
              <h3>0</h3>
              <button className="btn-2">
                <img
                  width="12"
                  height="12"
                  src="https://img.icons8.com/android/24/plus.png"
                  alt="plus"
                />
              </button>
            </div>
            <div>
              <button className="btn-3">Add to cart</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
