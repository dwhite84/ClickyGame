import React from "react";
import "./card.css";

const Card = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
        <div className ="img-container">
            <img alt="" src={"https://pm1.narvii.com/6315/146b162f454a15ac0152f1cd4a25d8ac65f402f5_hq.jpg"} />
            <img alt="" src={"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjo0f7WlPTbAhXB7YMKHWYzCIkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.express.co.uk%2Fsport%2Fothersport%2F947071%2FLeBron-James-Cleveland-Cavaliers-NBA-Playoffs-2018-Game-1-Indiana-Pacers&psig=AOvVaw0HdyAH-8jn2U0UpijeEdVV&ust=1530199816941546"} />
            <img alt="" src={"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi3mJqXlfTbAhVGwYMKHQdzCyMQjRx6BAgBEAU&url=https%3A%2F%2Fftw.usatoday.com%2F2016%2F02%2Fkobe-bryant-dislocates-finger-has-it-popped-back-in-immediately-scores-is-invincible&psig=AOvVaw1hVs9od1LCCu5bRodYR6Lg&ust=1530199951090208"} />
            <img alt="" src={"http://images.performgroup.com/di/library/omnisport/d5/56/chris-paul_d82f4hca8s9a1bltoqibkoz5z.jpg?t=382427161&w=960&quality=70"} />
            <img alt="" src={"https://clutchpoints.com/wp-content/uploads/2016/07/james-harden-rockets-051315-getty-ftr_12tpj9s0jk5p910a7u5cf945f7-e1478120819441.jpg"} />
            <img alt="" src={"https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2018-01/lillard_drive.jpg?itok=1IOPO_tR"} />
            <img alt="" src={"https://i.pinimg.com/736x/b6/dd/83/b6dd835bb8ea9e7487c699d3c328ead4.jpg"} />
            <img alt="" src={"https://usatftw.files.wordpress.com/2018/03/usp_nba__new_orleans_pelicans_at_san_antonio_spurs_98457542-e1522524385929.jpg?w=1000&h=600&crop=1"} />
            <img alt="" src={"https://cdn.vox-cdn.com/thumbor/z4duH-_pc7qKifGz8eumi2eOkn4=/0x0:2596x1616/1200x800/filters:focal(691x394:1105x808)/cdn.vox-cdn.com/uploads/chorus_image/image/58071323/usa_today_10475547.0.jpg"} />
            <img alt="" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pm_yckQzjAKaB5RyNdF9lOMqq4jcyGdm8KmoIby1lqayVYEOfA"} />
            <img alt="" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV28eCV7DH4Pdew4uTHiwdiWjJgwBmIGSL5sKSp-jaKIbXh8Gf"} />
           
             <img alt="" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0C3w_K11rfw7a8xlc3c-bjwLe2vpCo7ifqM81-DwmvuhBGHkZfw"} />
         </div>
    </div>        
);

export default Card;