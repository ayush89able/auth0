import React, { Component } from 'react'
import logo from '../logo.png'
export default class Home extends Component {
    state = {
        uploaded: false,
        imgArr: null,
    };

    componentDidMount() {
        this.getImage();
    }

    imageUpload = (e) => {
        let arr = [];
        let i = 0;
        for (i = 0; i < 100; i++) {
            const img = localStorage.getItem(`img${i}`);
            if (img == null) break;
            arr.push(img);
            this.setState({ imgArr: arr })
        }
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
            localStorage[`img${i}`] = base64;
            console.debug("file stored", base64);
            this.getImage();
        });

    };

    getImage = () => {
        let arr = [];
        for (let i = 0; i < 100; i++) {
            const img = localStorage.getItem(`img${i}`);
            console.log(img);
            if (img == null) break;
            arr.push(img);
            this.setState({ imgArr: arr })
        }
        this.setState({
            uploaded: true,
        })
        console.log(this.state.imgArr)
    }


    render() {
        const { isAuthenticated, login } = this.props.auth;
        const { uploaded, imgArr } = this.state;
        return (
            <div>
                {isAuthenticated()
                    ? (
                        <>
                            <br />
                            <label>Upload Image</label><br />
                            <input
                                type="file"
                                id="imageFile"
                                name='imageFile'
                                onChange={this.imageUpload} />;
                                <hr />
                            <br />
                            {imgArr != null ?
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            {imgArr.map((item, key) =>
                                                <img src={item} style={{ width: '200px', height: '200px', marginLeft: '1em', marginTop: '1em' }} key={key} />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                : ''
                            }
                        </>
                    )
                    : (
                        <>
                            <div class="card" style={{ width: '18rem', display: 'block', margin: 'auto', marginTop: '5em' }}>
                                <img src={logo} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title" style={{ textAlign: 'center' }}>Auth0 Applcation</h5>
                                    <p class="card-text" style={{ textAlign: 'justify' }}>This application uses Auth0 Authentication. Build using React,Bootstrap by <strong>Ayush Sharma</strong></p>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        )
    }
}

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}
