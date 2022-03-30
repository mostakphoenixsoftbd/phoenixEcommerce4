import React, {Component,Fragment} from 'react';

class MegaMenu extends Component {

    constructor() {
        super();
        this.MegaMenu=this.MegaMenu.bind(this);
    }


    componentDidMount() {
        this.MegaMenu();
    }


    MegaMenu(){
      var acc= document.getElementsByClassName("accordion");
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
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">
                    <button className="accordion"> <img className="accordionMenuIcon" src="https://phoenixsoftbd.com/wp-content/uploads/2019/03/Bengal-Biscuits-Ltd.jpg"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>


                    <button className="accordion"> <img className="accordionMenuIcon" src="https://phoenixsoftbd.com/wp-content/uploads/2019/03/Bengal-Biscuits-Ltd.jpg"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>

                        </ul>
                    </div>


                    <button className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button  className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button  className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>


                    <button  className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button  className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>

                    <button  className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>


                    <button  className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>


                    <button  className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>


                    <button  className="accordion"> <img className="accordionMenuIcon" src="https://static-01.daraz.com.bd/p/09a825ad88799f2c3cfe5538e391990f.jpg_200x200q80-product.jpg_.webp"/>   Men's Clothing</button>
                    <div className="panel">
                        <ul>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                            <li><a href="#" className="accordionItem">Man Shirt</a></li>
                        </ul>
                    </div>


                </div>
            </div>
        );
    }
}

export default MegaMenu;