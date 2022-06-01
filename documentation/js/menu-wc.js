'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-js-starter documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-9dda0f221049c4a5ded5f4cc8fdfed49387c494587c86abaaf1a094440be4cd640385accc10df4b40df93200113258325c802d29bde4c3583e900fb62584a1f1"' : 'data-target="#xs-controllers-links-module-AppModule-9dda0f221049c4a5ded5f4cc8fdfed49387c494587c86abaaf1a094440be4cd640385accc10df4b40df93200113258325c802d29bde4c3583e900fb62584a1f1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9dda0f221049c4a5ded5f4cc8fdfed49387c494587c86abaaf1a094440be4cd640385accc10df4b40df93200113258325c802d29bde4c3583e900fb62584a1f1"' :
                                            'id="xs-controllers-links-module-AppModule-9dda0f221049c4a5ded5f4cc8fdfed49387c494587c86abaaf1a094440be4cd640385accc10df4b40df93200113258325c802d29bde4c3583e900fb62584a1f1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-9dda0f221049c4a5ded5f4cc8fdfed49387c494587c86abaaf1a094440be4cd640385accc10df4b40df93200113258325c802d29bde4c3583e900fb62584a1f1"' : 'data-target="#xs-injectables-links-module-AppModule-9dda0f221049c4a5ded5f4cc8fdfed49387c494587c86abaaf1a094440be4cd640385accc10df4b40df93200113258325c802d29bde4c3583e900fb62584a1f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9dda0f221049c4a5ded5f4cc8fdfed49387c494587c86abaaf1a094440be4cd640385accc10df4b40df93200113258325c802d29bde4c3583e900fb62584a1f1"' :
                                        'id="xs-injectables-links-module-AppModule-9dda0f221049c4a5ded5f4cc8fdfed49387c494587c86abaaf1a094440be4cd640385accc10df4b40df93200113258325c802d29bde4c3583e900fb62584a1f1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-2830fab9dd02154b06b04a1814761c7a6b26076cbe54aecf0809551841d4675887439ec988ffc7ad4f69e4f8e76032c25cf0a81d7663564af7c382f99cdc33aa"' : 'data-target="#xs-injectables-links-module-AuthModule-2830fab9dd02154b06b04a1814761c7a6b26076cbe54aecf0809551841d4675887439ec988ffc7ad4f69e4f8e76032c25cf0a81d7663564af7c382f99cdc33aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2830fab9dd02154b06b04a1814761c7a6b26076cbe54aecf0809551841d4675887439ec988ffc7ad4f69e4f8e76032c25cf0a81d7663564af7c382f99cdc33aa"' :
                                        'id="xs-injectables-links-module-AuthModule-2830fab9dd02154b06b04a1814761c7a6b26076cbe54aecf0809551841d4675887439ec988ffc7ad4f69e4f8e76032c25cf0a81d7663564af7c382f99cdc33aa"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalAuthGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalAuthGuard</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthorsModule.html" data-type="entity-link" >AuthorsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthorsModule-700713874f2cf0f024c8e6e187bac6f41d4755019a7fbafe8b315df31c13dbd1b2c8fa572cfd3bcf03c23b7dc080dca4eaa85db3fb64b4d816eb01d1962bcfc3"' : 'data-target="#xs-injectables-links-module-AuthorsModule-700713874f2cf0f024c8e6e187bac6f41d4755019a7fbafe8b315df31c13dbd1b2c8fa572cfd3bcf03c23b7dc080dca4eaa85db3fb64b4d816eb01d1962bcfc3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthorsModule-700713874f2cf0f024c8e6e187bac6f41d4755019a7fbafe8b315df31c13dbd1b2c8fa572cfd3bcf03c23b7dc080dca4eaa85db3fb64b4d816eb01d1962bcfc3"' :
                                        'id="xs-injectables-links-module-AuthorsModule-700713874f2cf0f024c8e6e187bac6f41d4755019a7fbafe8b315df31c13dbd1b2c8fa572cfd3bcf03c23b7dc080dca4eaa85db3fb64b4d816eb01d1962bcfc3"' }>
                                        <li class="link">
                                            <a href="injectables/AuthorsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatsModule.html" data-type="entity-link" >CatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CatsModule-07dbbe4cf757561f7b9767e3aa83a456206cef9b717ff2dd89826cb1b77680f87ac8ff8899cee9cfff237015c0f23b3f08483cc3a0b2ef31ecffa6c475bcd629"' : 'data-target="#xs-controllers-links-module-CatsModule-07dbbe4cf757561f7b9767e3aa83a456206cef9b717ff2dd89826cb1b77680f87ac8ff8899cee9cfff237015c0f23b3f08483cc3a0b2ef31ecffa6c475bcd629"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CatsModule-07dbbe4cf757561f7b9767e3aa83a456206cef9b717ff2dd89826cb1b77680f87ac8ff8899cee9cfff237015c0f23b3f08483cc3a0b2ef31ecffa6c475bcd629"' :
                                            'id="xs-controllers-links-module-CatsModule-07dbbe4cf757561f7b9767e3aa83a456206cef9b717ff2dd89826cb1b77680f87ac8ff8899cee9cfff237015c0f23b3f08483cc3a0b2ef31ecffa6c475bcd629"' }>
                                            <li class="link">
                                                <a href="controllers/CatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CatsModule-07dbbe4cf757561f7b9767e3aa83a456206cef9b717ff2dd89826cb1b77680f87ac8ff8899cee9cfff237015c0f23b3f08483cc3a0b2ef31ecffa6c475bcd629"' : 'data-target="#xs-injectables-links-module-CatsModule-07dbbe4cf757561f7b9767e3aa83a456206cef9b717ff2dd89826cb1b77680f87ac8ff8899cee9cfff237015c0f23b3f08483cc3a0b2ef31ecffa6c475bcd629"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CatsModule-07dbbe4cf757561f7b9767e3aa83a456206cef9b717ff2dd89826cb1b77680f87ac8ff8899cee9cfff237015c0f23b3f08483cc3a0b2ef31ecffa6c475bcd629"' :
                                        'id="xs-injectables-links-module-CatsModule-07dbbe4cf757561f7b9767e3aa83a456206cef9b717ff2dd89826cb1b77680f87ac8ff8899cee9cfff237015c0f23b3f08483cc3a0b2ef31ecffa6c475bcd629"' }>
                                        <li class="link">
                                            <a href="injectables/CatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-71b5b9fb370f32a5fc3d4634b400258384d73d40a8e3eb42419d5959ca293aeb2ea422b8a481e3cdff9e1b26c38c877005d4178e6de87bdf2265e394896dc299"' : 'data-target="#xs-controllers-links-module-HealthModule-71b5b9fb370f32a5fc3d4634b400258384d73d40a8e3eb42419d5959ca293aeb2ea422b8a481e3cdff9e1b26c38c877005d4178e6de87bdf2265e394896dc299"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-71b5b9fb370f32a5fc3d4634b400258384d73d40a8e3eb42419d5959ca293aeb2ea422b8a481e3cdff9e1b26c38c877005d4178e6de87bdf2265e394896dc299"' :
                                            'id="xs-controllers-links-module-HealthModule-71b5b9fb370f32a5fc3d4634b400258384d73d40a8e3eb42419d5959ca293aeb2ea422b8a481e3cdff9e1b26c38c877005d4178e6de87bdf2265e394896dc299"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LazyModule.html" data-type="entity-link" >LazyModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrdersModule-3b5f18746838a18d354059048f41f04b970703d579e417333776313a2de46e468da3a8d2154dd90369d05f41bab3a9384e86e912206cffca4714722d6952f1d8"' : 'data-target="#xs-controllers-links-module-OrdersModule-3b5f18746838a18d354059048f41f04b970703d579e417333776313a2de46e468da3a8d2154dd90369d05f41bab3a9384e86e912206cffca4714722d6952f1d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-3b5f18746838a18d354059048f41f04b970703d579e417333776313a2de46e468da3a8d2154dd90369d05f41bab3a9384e86e912206cffca4714722d6952f1d8"' :
                                            'id="xs-controllers-links-module-OrdersModule-3b5f18746838a18d354059048f41f04b970703d579e417333776313a2de46e468da3a8d2154dd90369d05f41bab3a9384e86e912206cffca4714722d6952f1d8"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrdersModule-3b5f18746838a18d354059048f41f04b970703d579e417333776313a2de46e468da3a8d2154dd90369d05f41bab3a9384e86e912206cffca4714722d6952f1d8"' : 'data-target="#xs-injectables-links-module-OrdersModule-3b5f18746838a18d354059048f41f04b970703d579e417333776313a2de46e468da3a8d2154dd90369d05f41bab3a9384e86e912206cffca4714722d6952f1d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-3b5f18746838a18d354059048f41f04b970703d579e417333776313a2de46e468da3a8d2154dd90369d05f41bab3a9384e86e912206cffca4714722d6952f1d8"' :
                                        'id="xs-injectables-links-module-OrdersModule-3b5f18746838a18d354059048f41f04b970703d579e417333776313a2de46e468da3a8d2154dd90369d05f41bab3a9384e86e912206cffca4714722d6952f1d8"' }>
                                        <li class="link">
                                            <a href="injectables/CreateOrderListener.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateOrderListener</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-7191f624b85e9beb4a1e3343a8f1f000e734d867ac370fbe537e24954a109592dcd5b41f45cd7a8d321945913fdc3ac19b9759a940f9f242fdc09cc70662ac6a"' : 'data-target="#xs-injectables-links-module-UsersModule-7191f624b85e9beb4a1e3343a8f1f000e734d867ac370fbe537e24954a109592dcd5b41f45cd7a8d321945913fdc3ac19b9759a940f9f242fdc09cc70662ac6a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-7191f624b85e9beb4a1e3343a8f1f000e734d867ac370fbe537e24954a109592dcd5b41f45cd7a8d321945913fdc3ac19b9759a940f9f242fdc09cc70662ac6a"' :
                                        'id="xs-injectables-links-module-UsersModule-7191f624b85e9beb4a1e3343a8f1f000e734d867ac370fbe537e24954a109592dcd5b41f45cd7a8d321945913fdc3ac19b9759a940f9f242fdc09cc70662ac6a"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/CatsDemoController.html" data-type="entity-link" >CatsDemoController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Author.html" data-type="entity-link" >Author</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthorsResolver.html" data-type="entity-link" >AuthorsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/CacheInterceptor.html" data-type="entity-link" >CacheInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cat.html" data-type="entity-link" >Cat</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthorInput.html" data-type="entity-link" >CreateAuthorInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCatDto.html" data-type="entity-link" >CreateCatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderEvent.html" data-type="entity-link" >CreateOrderEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorsInterceptor.html" data-type="entity-link" >ErrorsInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneParams.html" data-type="entity-link" >FindOneParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeoutInterceptor.html" data-type="entity-link" >TimeoutInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthorInput.html" data-type="entity-link" >UpdateAuthorInput</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CommonService.html" data-type="entity-link" >CommonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JoiValidationPipe.html" data-type="entity-link" >JoiValidationPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LazyService.html" data-type="entity-link" >LazyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGaurd.html" data-type="entity-link" >AuthGaurd</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CatType.html" data-type="entity-link" >CatType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateCat.html" data-type="entity-link" >CreateCat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnvVariables.html" data-type="entity-link" >EnvVariables</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserEntity.html" data-type="entity-link" >UserEntity</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});