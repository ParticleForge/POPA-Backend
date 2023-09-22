import path from "path";
import {createAINFTs} from "./create_ainfts.js"
import {downloadAINFTs} from "./download_ainfts.js"

/**
 * Steps
 * 1. Deploy MiniAIs to NFT Storage
 * 2. Create AI NFTs for the MiniAIs
 */
// let aigenml_dir = "/Users/apple/AigenProtocol/codebase/aigenml"
// let model_name = "mobilenet"
// let model_dir = path.join(aigenml_dir, model_name)
// let weights_dir = path.join(model_dir, "final_shards")
// let download_dir = path.join(model_dir, "downloaded_shards")

let action = process.env.npm_config_action
let model_name = process.env.npm_config_model_name
let model_dir = process.env.npm_config_model_dir
let weights_dir =  path.join(model_dir, "final_shards")
let download_dir = path.join(model_dir, "downloaded_shards")

if(action === "createNFT"){
    createAINFTs(model_name, model_dir).then(r => {
        console.log(r)
    })
    console.log("NFTs created")
}else if(action === "downloadNFT") {
    downloadAINFTs(model_name + "_metadata.json", download_dir).then(r => {
        console.log(r)
    })
    console.log("NFTs downloaded")
}else{
    console.log("Invalid action!")
}
