import "./Footer.css"
import flowers from '../../image/flowers.png'


export default function Footer(){
    return(
        <div className = "FooterAll">
        <div className = "Footer">
            <div className = "HelpF">
                <h6>Помошь</h6>
                <ul>
                    <li>Как оплатить</li>
                    <li>Доставка</li>
                    <li>Отзывы</li>
                    <li>Акции</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div className = "KatalogF">
            <h6>Каталог</h6>
                <ul>
                    <li>Букеты</li>
                    <li>Популярные</li>
                    <li>Экзотика</li>
                    <li>Игрушки</li>
                    <li>Открытки</li>
                </ul>
            </div>
            <div className = "Kontaktu">
            <h6>Контакты</h6>
                <ul>
                    <li>г.Душанбе</li>
                    <li>+992 880 880</li>
                    <li>+992 880 880</li>
                    <li>info@worldofflowers.ru</li>
                </ul>
            </div>
            <div className = "Adres">
            <h6>Наши адреса</h6>
                <ul>
                    <li>ул.Сино 122</li>
                    <li>ул.Лохути 25</li>
                    <li>ул.Фирдавси34</li>
                </ul>
            </div>
            <div className = "FotoLogo">
                <img src = {flowers} style = {{width:"30%",height:"100px",marginLeft:"60%"}}/>
            </div>
        </div>
        </div>
    )
}