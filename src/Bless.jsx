import React from 'react';
import './index.css';
import gift from './Images/gift.png';
import surprise from './Images/surprise.png';
import Slider from './Slider';

const  Bless = () =>{

    const play = () =>{
        var audio= new Audio("https://busyroute.com/mp3-songs/downloads/happy-birthday-to-you-ji-song.mp3");
        audio.play();
        document.getElementById('gift').style.display="none";
        document.getElementById('surprise').style.display="block";
    }
 return ( 
     <div>
         <h1 style={{textAlign:"center", paddingLeft:"20vw", paddingRight:"20vw", fontSize:"3vw"}}>"Forget the past; it is gone. Do not think of the future; it has not come. But live in the present because it's a gift and that's why it's called the present. Happy birthday."</h1>
    <h2 style={{textAlign:"center"}}>Click on gift</h2>
    <div>
    <img src={gift} id="gift" onClick={play}  alt="gift"/>
    <img src={surprise}  id="surprise" alt="surprise"/>
    </div>
 <div className="blessing">
    Your message of your loved ones. consectetur adipisicing elit. Fugiat, officia aliquam? Molestias itaque cum fugit exercitationem placeat laboriosam praesentium sunt, quae necessitatibus veritatis veniam id rem perspiciatis velit nostrum. Excepturi ea exercitationem doloribus vel libero debitis voluptate dicta recusandae fugiat quaerat officiis adipisci repellat officia, eveniet iure aut eligendi minima nostrum porro. Officia vitae inventore exercitationem maxime, sapiente eos, amet in quidem ipsa ratione assumenda ducimus corrupti earum, eveniet enim temporibus similique id eligendi! Sequi nemo illum optio similique maiores beatae enim, alias, omnis ipsum fugiat architecto dolorum aut, laudantium nisi perspiciatis numquam earum. Quos, nemo at voluptas neque unde aspernatur quibusdam cum nostrum id, maiores autem laborum, suscipit iste enim consequuntur! Vitae, molestiae assumenda maxime neque ratione sit dicta</div>
    <Slider/>
    <div className="blessing"> iste expedita labore provident voluptatibus explicabo cum quo praesentium ducimus delectus quis laboriosam. Voluptas earum dolore, velit, reprehenderit illum delectus libero pariatur quisquam mollitia recusandae necessitatibus culpa sapiente, tempora deserunt. Cumque vel alias sint maxime provident, molestiae, sapiente nisi vitae non nam est iste amet assumenda minus dolore delectus eveniet officiis quibusdam quod quam possimus dicta qui distinctio. Itaque esse enim laboriosam aperiam neque vel, quaerat a corporis numquam, minus accusantium non quod quam tenetur beatae. Cum ab tempore impedit perferendis iste quos! Obcaecati, praesentium eaque. Quod veritatis inventore quo suscipit quia, pariatur tempore, maxime, tempora excepturi repellendus labore ex corrupti dolor numquam vel architecto blanditiis eius magni. Molestias commodi unde nulla ducimus veniam! A debitis quis minus dolorum nobis quasi numquam voluptates ex, repudiandae placeat quos sapiente laborum cumque dolore nihil perspiciatis autem reprehenderit inventore ullam consequuntur assumenda aspernatur ab mollitia. Laboriosam ipsa sunt expedita illum et a consequatur cum deserunt, minus modi voluptas vel. Aperiam sint sunt expedita consequuntur rerum, commodi adipisci recusandae quibusdam suscipit voluptate eum nesciunt non fugiat. Recusandae dolorem aperiam voluptate natus! Quas, voluptatum quis?    
    </div>
    </div>)

}

export default Bless;