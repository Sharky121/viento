export default function NotFound() {
  return (
      <>
        <div className="page-main__content main-content">
          <a className="main-content__back" href={`/products/ekrany_dekorativnye_dlya_radiatorov/`} id="back-page">Назад</a>
          
          <div className="main-content__header content-header">
              <h2 className="content-header__title">Извините</h2>
              <p className="content-header__name">Страница наполняется</p>
          </div>

          <section className="main-content__product product">
              <div className="product__container">
                  <div className="product__image">
                      
                  </div>
                  <div className="product__description product-description">
                      <h1 className="product-description__title">
                          Тут скоро будет информация
                      </h1>
                  </div>
              </div>
          </section>
        </div>
      </>
  )
}