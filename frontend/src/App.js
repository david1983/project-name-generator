import React, { Component } from 'react';
import axios from "axios"
import {observer} from "mobx-react"
import './App.css';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
const shareUrl = window.location.href
const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount, 
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');

const apiUrl = '/api/generate'
@observer class App extends Component {

  generate(){
    axios.get(apiUrl)
      .then((result)=>{
        if(result.status==200)
          this.props.store.name = result.data.name
      })
  }

  render() {
    return (
      <div className="App">
          <div className="gen-name">{this.props.store.name}</div>
          <div className="gen-action">
              <button className="button" onClick={this.generate.bind(this)}>Generate random name</button>
          </div>
          <div className="gen-share">
            <div>
              <FacebookShareButton url={shareUrl} title={this.props.store.name} className="social-item" >
                <FacebookIcon size={32} round={true}/>              
              </FacebookShareButton>
              <FacebookShareCount url={shareUrl}>
                {shareCount => (
                  <span className="myShareCountWrapper">{shareCount}</span>
                )}
              </FacebookShareCount>
            </div>
            <div>
              <GooglePlusShareButton url={shareUrl} title={this.props.store.name}>
                <GooglePlusIcon size={32} round={true}/>              
              </GooglePlusShareButton>
              <GooglePlusShareCount url={shareUrl}>
                {shareCount => (
                  <span className="myShareCountWrapper">{shareCount}</span>
                )}
              </GooglePlusShareCount>
            </div>
            <div>
              <TwitterShareButton url={shareUrl} title={this.props.store.name}>
                <TwitterIcon size={32} round={true}/>              
              </TwitterShareButton>          
            </div>
            <div>
              <LinkedinShareButton url={shareUrl} title={this.props.store.name}>
                <LinkedinIcon size={32} round={true}/>              
              </LinkedinShareButton>
              <LinkedinShareCount url={shareUrl}>
                {shareCount => (
                  <span className="myShareCountWrapper">{shareCount}</span>
                )}
              </LinkedinShareCount>
            </div>
            

          </div>
      </div>
    );
  }
}

export default App;
