    <nav class="navbar ">
        <div class="navbar-brand">
        
        <router-link to="/" exact>
        <a class="navbar-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        </router-link>	

        <router-link to="/about">
        <a class="navbar-item is-hidden-desktop" target="_blank">
            <span class="icon" style="color: #333;">
            <i class="fa fa-github"></i>
            </span>
        </a>
        </router-link>

        <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
            <i class="fa fa-twitter"></i>
            </span>
        </a>

        <div class="navbar-burger burger" data-target="navMenuExample">
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>

        <div id="navMenuExample" class="navbar-menu">
        <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link  is-active" href="/documentation/overview/start/">
                Docs
            </a>
            <div class="navbar-dropdown ">
                <a class="navbar-item " href="/documentation/overview/start/">
                Overview
                </a>
                <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                Modifiers
                </a>
                <a class="navbar-item " href="http://bulma.io/documentation/grid/columns/">
                Grid
                </a>
                <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">
                Layout
                </a>
                <a class="navbar-item " href="http://bulma.io/documentation/form/general/">
                Form
                </a>
                <a class="navbar-item " href="http://bulma.io/documentation/elements/box/">
                Elements
                </a>
                
                <a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
                    Components
                </a>
                
                <hr class="navbar-divider">
                <div class="navbar-item">
                <div>
                    <p class="is-size-6-desktop">
                    <strong class="has-text-info">0.5.1</strong>
                    </p>
                    
                    <small>
                        <a class="view-all-versions" href="/versions">View all versions</a>
                    </small>
                    
                </div>
                </div>
            </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link " href="http://bulma.io/blog/">
                Blog
            </a>
            <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                
                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                    <div class="navbar-content">
                    <p>
                        <small class="has-text-info">03 Aug 2017</small>
                    </p>
                    <p>New feature: list of tags</p>
                    </div>
                </a>
                
                <a class="navbar-item" href="/2017/08/01/bulma-bootstrap-comparison/">
                    <div class="navbar-content">
                    <p>
                        <small class="has-text-info">01 Aug 2017</small>
                    </p>
                    <p>Bulma / Bootstrap comparison</p>
                    </div>
                </a>
                
                <a class="navbar-item" href="/2017/07/24/access-previous-bulma-versions/">
                    <div class="navbar-content">
                    <p>
                        <small class="has-text-info">24 Jul 2017</small>
                    </p>
                    <p>Access previous Bulma versions</p>
                    </div>
                </a>
                
                <a class="navbar-item" href="http://bulma.io/blog/">
                More posts
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                <div class="navbar-content">
                    <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                        <strong>Stay up to date!</strong>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                        <a class="button is-rss is-small" href="http://bulma.io/atom.xml">
                            <span class="icon is-small">
                            <i class="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
                More
            </div>
            <div id="moreDropdown" class="navbar-dropdown ">
                <a class="navbar-item " href="http://bulma.io/extensions/">
                <div class="level is-mobile">
                    <div class="level-left">
                    <div class="level-item">
                        <p>
                        <strong>Extensions</strong>
                        <br>
                        <small>Side projects to enhance Bulma</small>
                        </p>
                    </div>
                    </div>
                    <div class="level-right">
                    <div class="level-item">
                        <span class="icon has-text-info">
                        <i class="fa fa-plug"></i>
                        </span>
                    </div>
                    </div>
                </div>
                </a>
            </div>
        </div>
            <router-link to="/about" class="navbar-item">
            
            <!-- <span class="emoji">🎨</span> -->
            About me
            
        </router-link>
            <router-link to="/projects" class="navbar-item" >
            <!-- <span class="emoji">❤️</span> -->
            Projects
            </router-link>
        </div>

        <div class="navbar-end">
            <!-- <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
            Github
            </a>
            <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
            Twitter
            </a> -->
            <div class="navbar-item">
            <div class="field is-grouped">
                <p class="control">
                <a class="tw-button button"
        data-social-network="Twitter"
        data-social-action="tweet"
        data-social-target="http://bulma.io"
        target="_blank"
        href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
        <span class="icon">
        <i class="fa fa-twitter"></i>
        </span>
        <span>
        Tweet
        </span>
    </a>
                </p>
                <p class="control">
                <router-link to="/sign-in" class="button is-primary">
                    <span class="icon">
                    <i class="fa fa-sign-in"></i>
                    </span>
                    <span>Sign-in</span>
                </router-link>
                </p>
            </div>
            </div>
        </div>
        </div>
    </nav>