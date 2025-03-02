"use strict"

function addSwitcher()
{
	var dzSwitcher = '<div className=sidebar-right><div className=bg-overlay></div><a className="sidebar-right-trigger wave-effect wave-effect-x"href=javascript:void(0); data-bs-toggle=tooltip data-original-title="Change Layout"data-placement=right><span><i className="fa fa-cog fa-spin"></i> </span></a><a className=sidebar-close-trigger href=javascript:void(0);><span><i className="la-times las"></i></span></a><div className=sidebar-right-inner><h4>Pick your style <a className="btn btn-primary btn-sm pull-right"href=javascript:void(0); onclick=deleteAllCookie()>Delete All Cookie</a></h4><div className=card-tabs><ul className="nav nav-tabs"role=tablist><li className=nav-item><a className="nav-link active"href=#tab1 data-bs-toggle=tab>Theme</a><li className=nav-item><a className=nav-link href=#tab2 data-bs-toggle=tab>Header</a><li className=nav-item><a className=nav-link href=#tab3 data-bs-toggle=tab>Content</a><li className=nav-item><a className=nav-link href=#tab4 data-bs-toggle=tab>Navigation</a></ul></div><div className="tab-content tab-content-default tabcontent-border"><div className="fade tab-pane active show"id=tab1><div className=admin-settings><div className=row><div className=col-sm-12><p>Background</p><select className="default-select form-control wide"id=theme_version name=theme_version><option value="disabled selected hidden">Choose Mode<option value=light>Light<option value=dark>Dark</select></div><div className=col-sm-6><p>Primary Color<div><span data-bs-toggle=tooltip data-placement=top title="Color 1"><input className="chk-col-primary filled-in"id=primary_color_1 name=primary_bg type=radio value=color_1> <label for=primary_color_1 className=bg-label-pattern></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_2 name=primary_bg type=radio value=color_2> <label for=primary_color_2></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_3 name=primary_bg type=radio value=color_3> <label for=primary_color_3></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_4 name=primary_bg type=radio value=color_4> <label for=primary_color_4></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_5 name=primary_bg type=radio value=color_5> <label for=primary_color_5></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_6 name=primary_bg type=radio value=color_6> <label for=primary_color_6></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_7 name=primary_bg type=radio value=color_7> <label for=primary_color_7></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_9 name=primary_bg type=radio value=color_9> <label for=primary_color_9></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_10 name=primary_bg type=radio value=color_10> <label for=primary_color_10></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_11 name=primary_bg type=radio value=color_11> <label for=primary_color_11></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_12 name=primary_bg type=radio value=color_12> <label for=primary_color_12></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_13 name=primary_bg type=radio value=color_13> <label for=primary_color_13></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_14 name=primary_bg type=radio value=color_14> <label for=primary_color_14></label> </span><span><input className="chk-col-primary filled-in"id=primary_color_15 name=primary_bg type=radio value=color_15> <label for=primary_color_15></label></span></div></div><div className=col-sm-6><p>Navigation Header<div><span><input className="chk-col-primary filled-in"id=nav_header_color_1 name=navigation_header type=radio value=color_1> <label for=nav_header_color_1 className=bg-label-pattern></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_2 name=navigation_header type=radio value=color_2> <label for=nav_header_color_2></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_3 name=navigation_header type=radio value=color_3> <label for=nav_header_color_3></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_4 name=navigation_header type=radio value=color_4> <label for=nav_header_color_4></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_5 name=navigation_header type=radio value=color_5> <label for=nav_header_color_5></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_6 name=navigation_header type=radio value=color_6> <label for=nav_header_color_6></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_7 name=navigation_header type=radio value=color_7> <label for=nav_header_color_7></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_8 name=navigation_header type=radio value=color_8> <label for=nav_header_color_8 className=border></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_9 name=navigation_header type=radio value=color_9> <label for=nav_header_color_9></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_10 name=navigation_header type=radio value=color_10> <label for=nav_header_color_10></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_11 name=navigation_header type=radio value=color_11> <label for=nav_header_color_11></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_12 name=navigation_header type=radio value=color_12> <label for=nav_header_color_12></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_13 name=navigation_header type=radio value=color_13> <label for=nav_header_color_13></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_14 name=navigation_header type=radio value=color_14> <label for=nav_header_color_14></label> </span><span><input className="chk-col-primary filled-in"id=nav_header_color_15 name=navigation_header type=radio value=color_15> <label for=nav_header_color_15></label></span></div></div><div className=col-sm-6><p>Header<div><span><input className="chk-col-primary filled-in"id=header_color_1 name=header_bg type=radio value=color_1> <label for=header_color_1 className=bg-label-pattern></label> </span><span><input className="chk-col-primary filled-in"id=header_color_2 name=header_bg type=radio value=color_2> <label for=header_color_2></label> </span><span><input className="chk-col-primary filled-in"id=header_color_3 name=header_bg type=radio value=color_3> <label for=header_color_3></label> </span><span><input className="chk-col-primary filled-in"id=header_color_4 name=header_bg type=radio value=color_4> <label for=header_color_4></label> </span><span><input className="chk-col-primary filled-in"id=header_color_5 name=header_bg type=radio value=color_5> <label for=header_color_5></label> </span><span><input className="chk-col-primary filled-in"id=header_color_6 name=header_bg type=radio value=color_6> <label for=header_color_6></label> </span><span><input className="chk-col-primary filled-in"id=header_color_7 name=header_bg type=radio value=color_7> <label for=header_color_7></label> </span><span><input className="chk-col-primary filled-in"id=header_color_8 name=header_bg type=radio value=color_8> <label for=header_color_8 className=border></label> </span><span><input className="chk-col-primary filled-in"id=header_color_9 name=header_bg type=radio value=color_9> <label for=header_color_9></label> </span><span><input className="chk-col-primary filled-in"id=header_color_10 name=header_bg type=radio value=color_10> <label for=header_color_10></label> </span><span><input className="chk-col-primary filled-in"id=header_color_11 name=header_bg type=radio value=color_11> <label for=header_color_11></label> </span><span><input className="chk-col-primary filled-in"id=header_color_12 name=header_bg type=radio value=color_12> <label for=header_color_12></label> </span><span><input className="chk-col-primary filled-in"id=header_color_13 name=header_bg type=radio value=color_13> <label for=header_color_13></label> </span><span><input className="chk-col-primary filled-in"id=header_color_14 name=header_bg type=radio value=color_14> <label for=header_color_14></label> </span><span><input className="chk-col-primary filled-in"id=header_color_15 name=header_bg type=radio value=color_15> <label for=header_color_15></label></span></div></div><div className=col-sm-6><p>Sidebar<div><span><input className="chk-col-primary filled-in"id=sidebar_color_1 name=sidebar_bg type=radio value=color_1> <label for=sidebar_color_1 className=bg-label-pattern></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_2 name=sidebar_bg type=radio value=color_2> <label for=sidebar_color_2></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_3 name=sidebar_bg type=radio value=color_3> <label for=sidebar_color_3></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_4 name=sidebar_bg type=radio value=color_4> <label for=sidebar_color_4></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_5 name=sidebar_bg type=radio value=color_5> <label for=sidebar_color_5></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_6 name=sidebar_bg type=radio value=color_6> <label for=sidebar_color_6></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_7 name=sidebar_bg type=radio value=color_7> <label for=sidebar_color_7></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_8 name=sidebar_bg type=radio value=color_8> <label for=sidebar_color_8 className=border></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_9 name=sidebar_bg type=radio value=color_9> <label for=sidebar_color_9></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_10 name=sidebar_bg type=radio value=color_10> <label for=sidebar_color_10></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_11 name=sidebar_bg type=radio value=color_11> <label for=sidebar_color_11></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_12 name=sidebar_bg type=radio value=color_12> <label for=sidebar_color_12></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_13 name=sidebar_bg type=radio value=color_13> <label for=sidebar_color_13></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_14 name=sidebar_bg type=radio value=color_14> <label for=sidebar_color_14></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_color_15 name=sidebar_bg type=radio value=color_15> <label for=sidebar_color_15></label></span></div></div></div></div></div><div className="fade tab-pane"id=tab2><div className=admin-settings><div className=row><div className=col-sm-6><p>Layout</p><select className="default-select form-control wide"id=theme_layout name=theme_layout><option value="disabled selected hidden">Choose Layout<option value=vertical>Vertical<option value=horizontal>Horizontal</select></div><div className=col-sm-6><p>Header position</p><select className="default-select form-control wide"id=header_position name=header_position><option value="disabled selected hidden">Choose Header Positon<option value=static>Static<option value=fixed>Fixed</select></div><div className=col-sm-6><p>Sidebar</p><select className="default-select form-control wide"id=sidebar_style name=sidebar_style><option value="disabled selected hidden">Choose Sidebar<option value=full>Full<option value=mini>Mini<option value=overlay>Overlay<option value=icon-hover>Icon-hover</select></div><div className=col-sm-6><p>Sidebar position</p><select className="default-select form-control wide"id=sidebar_position name=sidebar_position><option value="disabled selected hidden">Choose Sidebar Position<option value=static>Static<option value=fixed>Fixed</select></div></div></div></div><div className="fade tab-pane"id=tab3><div className=admin-settings><div className=row><div className=col-sm-6><p>Container</p><select className="default-select form-control wide"id=container_layout name=container_layout><option value="disabled selected hidden">Choose Container<option value=wide>Wide<option value=boxed>Boxed<option value=wide-boxed>Wide Boxed</select></div><div className=col-sm-6><p>Body Font</p><select className="default-select form-control wide"id=typography name=typography><option value="disabled selected hidden">Choose Font<option value=roboto>Roboto<option value=poppins>Poppins<option value=opensans>Open Sans<option value=HelveticaNeue>HelveticaNeue</select></div><div className=col-sm-6><p>Direction</p><select className="default-select form-control wide"id=theme_direction name=theme_direction><option value="disabled selected hidden">Choose Direction<option value=ltr>LTR<option value=rtl>RTL</select></div></div></div></div><div className="fade tab-pane"id=tab4><div className=admin-settings><div className=row><div className=col-sm-12><p>Sidebar Menu Color<div><span data-bs-toggle=tooltip data-placement=top title="Color 1"><input className="chk-col-primary filled-in"id=sidebar_text_color_1 name=sidebar_text type=radio value=color_1> <label for=sidebar_text_color_1 className=bg-label-pattern></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_2 name=sidebar_text type=radio value=color_2> <label for=sidebar_text_color_2></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_3 name=sidebar_text type=radio value=color_3> <label for=sidebar_text_color_3></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_4 name=sidebar_text type=radio value=color_4> <label for=sidebar_text_color_4></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_5 name=sidebar_text type=radio value=color_5> <label for=sidebar_text_color_5></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_6 name=sidebar_text type=radio value=color_6> <label for=sidebar_text_color_6></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_7 name=sidebar_text type=radio value=color_7> <label for=sidebar_text_color_7></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_8 name=sidebar_text type=radio value=color_8> <label for=sidebar_text_color_8></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_9 name=sidebar_text type=radio value=color_9> <label for=sidebar_text_color_9></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_10 name=sidebar_text type=radio value=color_10> <label for=sidebar_text_color_10></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_11 name=sidebar_text type=radio value=color_11> <label for=sidebar_text_color_11></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_12 name=sidebar_text type=radio value=color_12> <label for=sidebar_text_color_12></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_13 name=sidebar_text type=radio value=color_13> <label for=sidebar_text_color_13></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_text_color_14 name=sidebar_text type=radio value=color_14> <label for=sidebar_text_color_14></label></span></div></div><div className=col-sm-12><p>Set Sidebar Image<div className=navigation-bg><span><input className="chk-col-primary filled-in"id=sidebar_img_1 name=sidebar_img_bg type=radio value=images/sidebar-img/1.jpg> <label for=sidebar_img_1 className=bg-image-sidebar style=background-image:url(images/sidebar-img/1.jpg)></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_img_2 name=sidebar_img_bg type=radio value=images/sidebar-img/2.jpg> <label for=sidebar_img_2 className=bg-image-sidebar style=background-image:url(images/sidebar-img/2.jpg)></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_img_3 name=sidebar_img_bg type=radio value=images/sidebar-img/3.jpg> <label for=sidebar_img_3 className=bg-image-sidebar style=background-image:url(images/sidebar-img/3.jpg)></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_img_4 name=sidebar_img_bg type=radio value=images/sidebar-img/4.jpg> <label for=sidebar_img_4 className=bg-image-sidebar style=background-image:url(images/sidebar-img/4.jpg)></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_img_5 name=sidebar_img_bg type=radio value=images/sidebar-img/5.jpg> <label for=sidebar_img_5 className=bg-image-sidebar style=background-image:url(images/sidebar-img/5.jpg)></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_img_6 name=sidebar_img_bg type=radio value=images/sidebar-img/6.jpg> <label for=sidebar_img_6 className=bg-image-sidebar style=background-image:url(images/sidebar-img/6.jpg)></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_img_7 name=sidebar_img_bg type=radio value=images/sidebar-img/7.jpg> <label for=sidebar_img_7 className=bg-image-sidebar style=background-image:url(images/sidebar-img/7.jpg)></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_img_8 name=sidebar_img_bg type=radio value=images/sidebar-img/8.jpg> <label for=sidebar_img_8 className=bg-image-sidebar style=background-image:url(images/sidebar-img/8.jpg)></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_img_9 name=sidebar_img_bg type=radio value=images/sidebar-img/9.jpg> <label for=sidebar_img_9 className=bg-image-sidebar style=background-image:url(images/sidebar-img/9.jpg)></label> </span><span><input className="chk-col-primary filled-in"id=sidebar_img_10 name=sidebar_img_bg type=radio value=images/sidebar-img/10.jpg> <label for=sidebar_img_10 className=bg-image-sidebar style=background-image:url(images/sidebar-img/10.jpg)></label></span></div></div></div></div></div></div></div><div className=note-text><span className=text-danger>*Note :</span> This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a className=text-primary href=../doc/ target=_blank>documentation.</a></div></div>';
	
	
	var demoPanel = '<div className="dz-demo-panel"> <div className="bg-close"></div><a className="dz-demo-trigger" data-bs-toggle="tooltip" data-bs-placement="right" data-original-title="Check out more demos" href="javascript:void(0)"><span><i className="las la-tint"></i></span></a> <div className="dz-demo-inner"> <a href="javascript:void(0);" className="btn btn-primary btn-sm px-2 py-1 mb-3" onclick="deleteAllCookie()">Delete All Cookie</a> <div className="dz-demo-header"> <h4>Select A Demo</h4> <a className="dz-demo-close" href="javascript:void(0)"><span><i className="las la-times"></i></span></a> </div><div className="dz-demo-content"> <div className="dz-wrapper"> <div className="overlay-bx dz-demo-bx demo-active"> <div className="overlay-wrapper rounded-lg"><img src="images/demo/pic1.jpg" alt="" className="w-100"></div><div className="overlay-layer"><a href="javascript:void(0);" data-theme="1" className="btn dz_theme_demo btn-secondary btn-sm me-2">Default</a><a href="javascript:void(0);" data-theme="1" className="btn dz_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 className="text-black">Demo 1</h5> <hr> <div className="overlay-bx dz-demo-bx"> <div className="overlay-wrapper rounded-lg"><img src="images/demo/pic2.jpg" alt="" className="w-100"></div><div className="overlay-layer"><a href="javascript:void(0);" data-theme="2" className="btn dz_theme_demo btn-secondary btn-sm me-2">Default</a><a href="javascript:void(0);" data-theme="2" className="btn dz_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 className="text-black">Demo 2</h5> <hr> <div className="overlay-bx dz-demo-bx"> <div className="overlay-wrapper rounded-lg"><img src="images/demo/pic3.jpg" alt="" className="w-100"></div><div className="overlay-layer"><a href="javascript:void(0);" data-theme="3" className="btn dz_theme_demo btn-secondary btn-sm me-2">Default</a><a href="javascript:void(0);" data-theme="3" className="btn dz_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 className="text-black">Demo 3</h5> <hr> <div className="overlay-bx dz-demo-bx"> <div className="overlay-wrapper rounded-lg"><img src="images/demo/pic4.jpg" alt="" className="w-100"></div><div className="overlay-layer"><a href="javascript:void(0);" data-theme="4" className="btn dz_theme_demo btn-secondary btn-sm me-2">Default</a><a href="javascript:void(0);" data-theme="4" className="btn dz_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 className="text-black">Demo 4</h5> <hr> <div className="overlay-bx dz-demo-bx"> <div className="overlay-wrapper rounded-lg"><img src="images/demo/pic5.jpg" alt="" className="w-100"></div><div className="overlay-layer"><a href="javascript:void(0);" data-theme="5" className="btn dz_theme_demo btn-secondary btn-sm me-2">Default</a><a href="javascript:void(0);" data-theme="5" className="btn dz_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 className="text-black">Demo 5</h5> </div></div><div className="fs-12 pt-3"><span className="text-danger">*Note :</span> This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a href="../doc/" className="text-primary">documentation.</a></div></div></div>';
	
	if($("#dzSwitcher").length == 0) {
		jQuery('body').append(dzSwitcher+demoPanel);
		  
		$('.sidebar-right-trigger').on('click', function() {
			$('.sidebar-right').toggleClass('show');
		});
		  
		$('.sidebar-close-trigger,.bg-overlay').on('click', function() {
			$('.sidebar-right').removeClass('show');
		});
	}
}

(function($) {
    "use strict"
	addSwitcher();

	
    const body = $('body');
    const html = $('html');

    //get the DOM elements from right sidebar
    const typographySelect = $('#typography');
    const versionSelect = $('#theme_version');
    const layoutSelect = $('#theme_layout');
    const sidebarStyleSelect = $('#sidebar_style');
    const sidebarPositionSelect = $('#sidebar_position');
    const headerPositionSelect = $('#header_position');
    const containerLayoutSelect = $('#container_layout');
    const themeDirectionSelect = $('#theme_direction');

    //change the theme typography controller
    typographySelect.on('change', function() {
        body.attr('data-typography', this.value);
		setCookie('typography', this.value);
    });

    //change the theme version controller
    versionSelect.on('change', function() {
		body.attr('data-theme-version', this.value);
		setCookie('version', this.value);
    });
	
    //change the sidebar position controller
    sidebarPositionSelect.on('change', function() {
        this.value === "fixed" && body.attr('data-sidebar-style') === "modern" && body.attr('data-layout') === "vertical" ? 
        alert("Sorry, Modern sidebar layout dosen't support fixed position!") :
        body.attr('data-sidebar-position', this.value);
		setCookie('sidebarPosition', this.value);
    });

    //change the header position controller
    headerPositionSelect.on('change', function() {
        body.attr('data-header-position', this.value);
		setCookie('headerPosition', this.value);
    });

    //change the theme direction (rtl, ltr) controller
    themeDirectionSelect.on('change', function() {
        html.attr('dir', this.value);
        html.attr('class', '');
        html.addClass(this.value);
        body.attr('direction', this.value);
		setCookie('direction', this.value);
    });

    // Change the theme layout controller
    layoutSelect.on('change', function() {
        if(body.attr('data-sidebar-style') === 'overlay') {
            body.attr('data-sidebar-style', 'full');
            body.attr('data-layout', this.value);
            return;
        }

        body.attr('data-layout', this.value);
		setCookie('layout', this.value);
    });
    
    //change the container layout controller
    containerLayoutSelect.on('change', function() {
        if(this.value === "boxed") {

            if(body.attr('data-layout') === "vertical" && body.attr('data-sidebar-style') === "full") {
                body.attr('data-sidebar-style', 'overlay');
                body.attr('data-container', this.value);
				setCookie('containerLayout', this.value);
                
                setTimeout(function(){
                    $(window).trigger('resize');
                },200);
				
                return;
            }
        }

        body.attr('data-sidebar-style', 'full');
		body.attr('data-container', this.value);
		setCookie('containerLayout', this.value);
    });

    //change the sidebar style controller
    sidebarStyleSelect.on('change', function() {
        if(body.attr('data-layout') === "horizontal") {
            if(this.value === "overlay") {
                alert("Sorry! Overlay is not possible in Horizontal layout.");
                return;
            }
        }

        if(body.attr('data-layout') === "vertical") {
            if(body.attr('data-container') === "boxed" && this.value === "full") {
                alert("Sorry! Full menu is not available in Vertical Boxed layout.");
                return;
            }

            if(this.value === "modern" && body.attr('data-sidebar-position') === "fixed") {
                alert("Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static.");
                return;
            }
        }

        body.attr('data-sidebar-style', this.value);

         if(body.attr('data-sidebar-style') === 'icon-hover') {
            $('.deznav').hover(function() {
			$('#main-wrapper').addClass('iconhover-toggle'); 
            }, function() {
			$('#main-wrapper').removeClass('iconhover-toggle'); 
            });
        } 
		
		setCookie('sidebarStyle', this.value);
	});

	/* Move LTR to RTL and RTL to LTR */
	
	var currentURL = window.location.href;
	
	jQuery('#theme_direction').on('change',function(){
		if(html.attr('dir') === "rtl"){
			jQuery('.main-css').attr('href','css/style-rtl.css');
		}else{
			jQuery('.main-css').attr('href','css/style.css')
		}
	});
	
	//change the nav-header background controller
    $('input[name="navigation_header"]').on('click', function() {
		body.attr('data-nav-headerbg', this.value);
		$('.nav-header').css('background-image', 'none');
		setCookie('navheaderBg', this.value);
    });
	
    //change the header background controller
    $('input[name="header_bg"]').on('click', function() {
        body.attr('data-headerbg', this.value);
		setCookie('headerBg', this.value);
    });
	
    //change the sidebar background controller
    $('input[name="sidebar_bg"]').on('click', function() {
        body.attr('data-sidebarbg', this.value);
		$('.deznav').css('background-image', 'none');
		setCookie('sidebarBg', this.value);
    });
	
	//change the sidebar text controller
    $('input[name="sidebar_text"]').on('click', function() {
        body.attr('data-sidebartext', this.value);
		setCookie('sidebarText', this.value);
    });
	
	//change the primary color controller
    $('input[name="primary_bg"]').on('click', function() {
        body.attr('data-primary', this.value);
		setCookie('primary', this.value);
    });
	
	
	//change the primary color controller
    $('input[name="sidebar_img_bg"]').on('click', function() {
		var sidebarBgImg = this.value;
		$('.deznav').css('background', 'url(' + sidebarBgImg + ')');
		$('.nav-header').css('background', 'url(' + sidebarBgImg + ')');
		$('.nav-header').addClass('light-logo');
		$('.nav-header').addClass('dez-bg');
		$('.deznav').addClass('dez-bg');
    });
	
	//change the sidebar background controller
	$('input[name="sidebar_bg"]').on('click', function() {
		body.attr('data-sidebarbg', this.value);
		$('.deznav, .nav-header').removeAttr('style');
		setCookie('sidebarBg', this.value);
		$('.deznav').removeClass('dez-bg');
	});
	
	$('#nav_header_color_1').on('click', function() {
		$('.nav-header').removeClass('light-logo');
    });
	
})(jQuery);