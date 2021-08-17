import "./About.css"
import worldofflowers from "../../image/worldofflowers.jpg"

export default function About({dark}){
    return(
        <div className = "About">
            <div>
                <h2 className = {dark ? "ProductName" : null}>О компании</h2>
                <p className = {dark ? "ProductName" : null}>
                Многие десятилетия цветы служат для человека олицетворением радости, 
                красоты и совершенства, подаренных самой природой. Интерьер без них
                скучен, лишен живого воображения... А улицы, витрины кажутся и вовсе 
                пустыми... Долой серые будни и унылые подарки. Интернет магазин "Мир Цветов" 
                - то место,где купить цветы недорого легко и очень приятно.</p>
                <p className = {dark ? "ProductName" : null} style = {{fontWeight:"bolder"}}>Мы гарантируем</p>
                <p className = {dark ? "ProductName" : null} >
                Купить цветы в Душанбе дешево, недорого или в розницу по оптовым ценам  - 
                совсем не значит стать обладателем некачественного букета или "узником" 
                сомнительного сервиса. Интернет магазин "Мир Цветов" твердо следует основным 
                принципам работы.</p>
                <ul style = {{background:"#FF0080",width:'40%',border:"1px solid #FF0080",boxShadow:"0px 5px 10px 2px rgba(34, 60, 80, 0.2)",borderRadius:"4px",color:"white"}} className = {dark ? "ProductName" : null}>
                    <li>Качество. Только свежие цветы, которые будут 
                        еще долго радовать своих обладателей.</li>
                    <li>Уникальность. Авторское оформление букетов флористами.</li>
                    <li>Быстрота. Рекордно сжатые сроки оформления заказа и доставки цветов.</li>
                    <li>Удобство. Минимум временных затрат на поиск нужного букета</li>
                    <li>Универсальность. Большой выбор ваз, подарков, открыток и аксессуаров</li>
                </ul>
                <p className = {dark ? "ProductName" : null}>
                Вы можете купить цветы недорого у нас и больше ни о чем не волноваться.
                Все этапы нашей работы, от поставки цветов, до оформления заявки и создания 
                букета, а также его дальнейшая доставка до клиента проводится профессионалами 
                высокого класса. Каждый из нас занимается своим делом на "отлично". 
                Именно поэтому "Мир Цветов" - настоящая команда.
                </p>
                <div className = "Foto">
                    <img style = {{borderRadius:"4px"}} src = {worldofflowers}/>
                </div>
                <p className = {dark ? "ProductName" : null} style = {{fontWeight:"bolder"}}>Мы предлагаем</p>
                <p className = {dark ? "ProductName" : null}>Огромный выбор цветов и готовых композиций
                в интернет магазине "Мир Цветов". У нас Вы 
                найдете классические варианты и модные букеты. 
                Чтобы купить цветы в Душанбе недорого, 
                больше не нужно их искать. Все есть тут.</p>
                <ul style = {{background:"#FF0080",width:'40%',border:"1px solid #FF0080",boxShadow:"0px 5px 10px 2px rgba(34, 60, 80, 0.2)",borderRadius:"4px",color:"white"}} className = {dark ? "ProductName" : null}>
                    <li>Цветы и готовые композиции, букеты</li>
                    <li>Комнатные горшечные растения.</li>
                    <li>Корзины и вазы.</li>
                    <li>Мягкие игрушки</li>
                    <li>Открытки и конверты для денег.</li>
                    <li>Грунт, дренаж, удобрения</li>
                </ul>
                <p className = {dark ? "ProductName" : null}>В наличии только качественные цветы из Эквадора, Колумбии, Голландии, России.</p>
            </div>
        </div>
    )
}