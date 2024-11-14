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
                    <a href="index.html" data-type="index-link">front documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardAdminComponent.html" data-type="entity-link" >DashboardAdminComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardOperarioComponent.html" data-type="entity-link" >DashboardOperarioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HistorialComponent.html" data-type="entity-link" >HistorialComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginFormComponent.html" data-type="entity-link" >LoginFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrdenTrabajoDetalleComponent.html" data-type="entity-link" >OrdenTrabajoDetalleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrdenTrabajoFormComponent.html" data-type="entity-link" >OrdenTrabajoFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegistroComponent.html" data-type="entity-link" >RegistroComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActivoService.html" data-type="entity-link" >ActivoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ActivoTareaService.html" data-type="entity-link" >ActivoTareaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminServiceTsService.html" data-type="entity-link" >AdminServiceTsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EdificioService.html" data-type="entity-link" >EdificioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OperarioService.html" data-type="entity-link" >OperarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdenTrabajoService.html" data-type="entity-link" >OrdenTrabajoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PisoService.html" data-type="entity-link" >PisoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SectorService.html" data-type="entity-link" >SectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TareaService.html" data-type="entity-link" >TareaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UbicacionService.html" data-type="entity-link" >UbicacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Activo.html" data-type="entity-link" >Activo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActivoTarea.html" data-type="entity-link" >ActivoTarea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Edificio.html" data-type="entity-link" >Edificio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrdenTrabajo.html" data-type="entity-link" >OrdenTrabajo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrdenTrabajoBackend.html" data-type="entity-link" >OrdenTrabajoBackend</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Piso.html" data-type="entity-link" >Piso</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sector.html" data-type="entity-link" >Sector</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tarea.html" data-type="entity-link" >Tarea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UbicacionActivo.html" data-type="entity-link" >UbicacionActivo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});