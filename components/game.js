import Hero from "./hero";
import React, {Component} from "react";

export default class Game extends Component {

        state = {
            angle: 0,
            heroTransform:""
        };

        constructor(props){
            super(props);
            this.speed = 2;
            this.hero = new Hero();
            this.loop = this.loop.bind(this);

            this.upActive = false;
            this.downActive = false;
            this.leftActive = false;
            this.rightActive = false;
        }

        onMouseMove(e){
            this.hero.angle = this.getAngle(this.hero, {x: e.screenX, y:e.screenY});
            this.setState({
                heroTransform: this.hero.transforms
            });
        }

        onKeydown({key}){
            switch(key){
                case "w": this.upActive=true; break;
                case "s": this.downActive=true; break;
                case "a": this.leftActive=true; break;
                case "d": this.rightActive=true; break;
            }
            console.log(this.hero.x);
        }

        onKeyup({key}){
            console.log("UP");
            switch(key){
                case "w": this.upActive=false; break;
                case "s": this.downActive=false; break;
                case "a": this.leftActive=false; break;
                case "d": this.rightActive=false; break;
            }
        }

        getAngle(a, p){
            return Math.atan2(a.y - p.y, a.x - p.x) * 180 / Math.PI + 270;
        }

        componentDidMount(){
            this.loop();
        }

        loop(){
            if (this.upActive){
                this.hero.y -= this.speed;
            }
            if (this.downActive){
                this.hero.y += this.speed;
            }
            if (this.rightActive){
                this.hero.x += this.speed;
            }
            if (this.leftActive){
                this.hero.x -= this.speed;
            }
            this.setState({
                heroTransform: this.hero.transforms
            });
            requestAnimationFrame(this.loop);
        }

        render(){
            return (
            <div className="game"
                 onMouseMove={this.onMouseMove.bind(this)}
                 onKeyPress={this.onKeydown.bind(this)}
                 onKeyUp={this.onKeyup.bind(this)}
                 tabIndex="0">
                <img className="hero" src="./game-assets/terminator.png"></img>
                <style jsx>{`
                
                .hero{
                    left: -50px;
                    top: -50px;
                    width: 100px;
                    height: 100px;
                    
                    position: absolute;
                    transform-origin: center center;
                    transform: ${this.state.heroTransform};
                }
            
                .game{
                    width: 100vw;
                    height: 100vh;
                }
          `}</style>
            </div>
        )
    }

}