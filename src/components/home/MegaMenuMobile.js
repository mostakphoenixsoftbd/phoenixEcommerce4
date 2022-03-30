import React, {Component} from 'react';

class MegaMenuMobile extends Component {

    constructor() {
        super();
        this.MegaMenu=this.MegaMenu.bind(this);
    }


    componentDidMount() {
        this.MegaMenu();
    }


    MegaMenu(){
        var acc= document.getElementsByClassName("accordionMobile");
        var accNum=acc.length;
        var i;
        for(i=0;i<accNum;i++){
            acc[i].addEventListener("click",function () {
                this.classList.toggle("active");
                var panel=this.nextElementSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight=null;
                }
                else{
                    panel.style.maxHeight=panel.scrollHeight+ "px"
                }
            })
        }

    }

    render() {
        return (
            <div className="accordionMenuDivMobile">
                <div className="accordionMenuDivInsideMobile">
                    <button className="accordionMobile"> <img width="50" height="50" className="accordionMenuIconMobile" src="https://icms-image.slatic.net/images/ims-web/ea1e2629-5f1f-479e-b001-0d4b92e06de9.gif"/>   Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>

                        </ul>
                    </div>


                    <button className="accordionMobile"> <img width="50" height="50" className="accordionMenuIconMobile" src="https://icms-image.slatic.net/images/ims-web/ea1e2629-5f1f-479e-b001-0d4b92e06de9.gif"/>   Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile"> <img width="50" height="50" className="accordionMenuIconMobile" src="https://icms-image.slatic.net/images/ims-web/ea1e2629-5f1f-479e-b001-0d4b92e06de9.gif"/>   Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile"> <img width="50" height="50" className="accordionMenuIconMobile" src="https://icms-image.slatic.net/images/ims-web/ea1e2629-5f1f-479e-b001-0d4b92e06de9.gif"/>   Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile"> <img width="50" height="50" className="accordionMenuIconMobile" src="https://icms-image.slatic.net/images/ims-web/ea1e2629-5f1f-479e-b001-0d4b92e06de9.gif"/>   Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile"> <img width="50" height="50" className="accordionMenuIconMobile" src="https://icms-image.slatic.net/images/ims-web/ea1e2629-5f1f-479e-b001-0d4b92e06de9.gif"/>   Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Man Shirt</a></li>
                        </ul>
                    </div>


                </div>
            </div>
        );
    }
}

export default MegaMenuMobile;