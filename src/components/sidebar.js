import insta from '../images/ig.png';
import x from '../images/twitter.png';
import linkin from '../images/linkedin.png';
import dc from '../images/dc.png';
import nyancat from '../images/nyancat.gif';

const Sidebar = () => {
    return (       
        <div class="sidebar">
            {/* <a href="/">
               <img src={nyancat} class="nyan" />
            </a> */}

            <a href="https://instagram.com/_dzikrimuhamad/">
               <img src={insta} class="ig" />
            </a>

            <a href="https://twitter.com">
               <img src={x} class="x" />
            </a>

            <a href="https://www.linkedin.com/in/muhamad-dzikri-b19218295/">
               <img src={linkin} class="in" />
            </a>

            <a href="https://discordapp.com/users/869136611630284861">
               <img src={dc} class="dc" />
            </a>

            <div class="vline">.</div>
        </div>
    )
}

export default Sidebar;