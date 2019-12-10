import { Link } from "@material-ui/core";

let initialState = {
    carouselProduct:
        [
            {

            }
        ],

}

const imgReducer = (state = initialState, action) => {
    // console.log(state);

    let newState = JSON.parse(JSON.stringify(state));

    if (action.type === "Carousel_info") {

        newState.carouselProduct.push(action.payload);
        // newState.inProcess = false;
        return newState;
    } else if (action.type == "Product_info") {
        newState.newProduct.push(action.payload);
        // newState.inProcess = false;
        return newState;
    }
    return newState;
}
export default imgReducer;