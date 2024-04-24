import Wrapper from '../assets/wrappers/Navbar_74';
import { Link } from 'react-router-dom';

const Navbar_74 = () => {
  return (
    <Wrapper>
      <header class='header'>
        <div class='header-row container' role='navigation' aria-label='Main'>
          <div class='header-left'>
            <div class='logo'>
              <h1>logo</h1>
            </div>
          </div>
          <div class='header-right'>
            <ul class='main-menu'>
              <li class='menu-item'>
                <Link to='#' class='active'>
                  Home
                </Link>
              </li>
              <li class='menu-item dropdown'>
                <Link to='#'> BLOGS +</Link>
                <div class='sub-menu-wrapper slideInUp'>
                  <ul class='sub-menu'>
                    <li class='menu-item'>
                      <Link to='/demoGetBlog_74'>demo:SupaGetBlog</Link>
                    </li>
                    <li class='menu-item'>
                      <Link to='mid1Blog_74'>mid1:SupbBlog</Link>
                    </li>
                    <li class='menu-item'>
                      <Link to='mid2Blog_74'>mid2:SupbBlog</Link>
                    </li>
                    <li class='menu-item'>
                      <Link to='#'>Service 4</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class='menu-item mega-menu'>
                <Link to='#'>Mega menu +</Link>
                <div class='mega-menu-wrapper slideInUp'>
                  <div class='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul class='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div class='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul class='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div class='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul class='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div class='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul class='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class='menu-item'>
                <Link to='#'>Blog</Link>
              </li>
              <li class='menu-item'>
                <Link to='#'>Contact</Link>
              </li>
            </ul>
            <a
              href='#'
              id='hamburger-icon'
              class='mobile-toggler'
              aria-label='Mobile Menu'
            >
              <i class='fas fa-bars'></i>
            </a>
          </div>
          <div id='mobile-menu' class='mobile-menu hidden slideInDown'>
            <ul>
              <li class='menu-item'>
                <Link to='#' class='active'>
                  Home
                </Link>
              </li>
              <li class='menu-item dropdown'>
                <Link to='#'>Services +</Link>
                <div class='sub-menu-wrapper'>
                  <ul class='sub-menu'>
                    <li class='menu-item'>
                      <Link to='#'>Service 1</Link>
                    </li>
                    <li class='menu-item'>
                      <Link to='#'>Service 2</Link>
                    </li>
                    <li class='menu-item'>
                      <Link to='#'>Service 3</Link>
                    </li>
                    <li class='menu-item'>
                      <Link to='#'>Service 4</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class='menu-item mega-menu'>
                <Link to='#'>Mega menu +</Link>
                <div class='mega-menu-wrapper'>
                  <div class='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul class='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div class='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul class='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div class='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul class='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div class='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul class='mega-sub-menu'>
                      <li>
                        <Link to='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class='menu-item'>
                <Link to='#'>Blog</Link>
              </li>
              <li class='menu-item'>
                <Link to='#'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar_74;
