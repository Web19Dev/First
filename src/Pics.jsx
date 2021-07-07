import x from './Images/1.webp';
import y from './Images/3.jpg';
import z from './Images/3.webp';
import a from './Images/4.jpeg';
import b from './Images/images.webp';
import './index.css';


const Pics = () =>{
    return(
    <div className="pic">
    <img src={x} className="bpic" alt="pic"/>
    <img src={y} className="bpic" alt="pic"/>
    <img src={z} className="bpic" alt="pic"/>
    <img src={a} className="bpic" alt="pic"/>
    <img src={b} className="bpic" alt="pic"/>
    </div>
    );
}


export default Pics;