import me from '../images/me.jpg';
import venti from '../images/venti.jpg';
import vid from '../images/vid.mp4';

const Main = () => {
    return (
        <div class="profile">
            <h1 id="about" class="am">About Me</h1>

            <p style={{marginBottom: "30px"}}>Hai, nama saya Muhamad Dzikri Gumilang dan biasa dipanggil Dzikri. <br /> Seorang yang pergi merantau di negeri orang untuk menyelesaikan apa <br /> yang telah dimulainya. Tetapi, waktunya hanya dihabiskan  untuk <br /> bermain game.</p>

            <p style={{marginBottom: "30px"}}>Sedikit cerita tentang website ini merupakan bagian dari tugas perkuliahan <br /> atau UTS yang diberikan di mata kuliah pemrograman internet, khususnya <br /> di materi ReactJs.</p>

            <p>Di kala sibuknya perkuliahan dengan tugas-tugas yang diberikan, saya <br /> menyempatkan untuk bermain game supaya tidak stress. Selain itu, juga <br /> sering mendengarkan lagu Hindia, Payung Teduh, dan Fiersa Besari. <br /> Sesekali menonton film ataupun anime.</p>

            <div id="pr">
                <img src={me} />
                <div class="bd" />
            </div>
            
            <h1 id="gallery" class="title">Gallery</h1>
            
            <div id="ft">
                <video autoPlay loop>
                    <source src={vid} type='video/mp4' />
                </video>

                <img src={venti} />

                <p>Game</p>
                <p class="gen">Genshin Impact</p>
            </div>
            
            <h1 id="contact" class="ct">Contact</h1>

            <p>Ada pesan atau kesan yang ingin disampaikan kepada penulis blog ini? Kamu bisa menghubungi <br /> email <b>muhamaddzikri@gmail.com</b></p>

            <div class="form">
                <form action="">
                <input type="text" class="shape" placeholder="Nama" />
                <input type="email" class="shape" placeholder="Email" />
                <input type="text" class="shape" placeholder="Telepon" />
                <textarea class="shape" placeholder="Pesan" style={{height: "150px"}} />
                </form>
            </div>

            <button type="button">Submit</button><br />

            <a href="/">Back To Home</a>
        </div>
    )
}

export default Main;