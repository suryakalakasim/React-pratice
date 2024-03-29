import React from "react";
import { connect } from "react-redux";
const Badge = ({ product }) => {
    return <div style={{ "margin": "80px 0px 10px 0px" }}>
        <center>
            <button type="button">
                Total Products
                <span >
                    {product.length}
                </span>
            </button>
        </center>
    </div>
}
const mapStateToProps = state =>({
    product : state
})
export default connect(mapStateToProps)(Badge);