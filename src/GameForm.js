import React, { Component } from 'react'
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveGame } from './actions/actions';
import { Redirect } from 'react-router-dom';

class GameForm extends Component {
    state = {
        title: '',
        cover: '',
        errors: {},
        loading: false,
        done: false
    }

    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({ [e.target.name]: e.target.value, errors });
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }

    handleSubmit = (e) => {
        const { title, cover } = this.state;
        e.preventDefault();

        // validation
        let errors = {};
        if (title.trim() === '') errors.title = "Can't be empty";
        if (cover.trim() === '') errors.cover = "Can't be empty";
        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            this.setState({ loading: true })
            this.props.createGame({ title, cover }).then(
                () => { this.setState({ done: true }) },
                (err) => err.response.json().then(({ errors }) => this.setState({ errors, loading: false }))
            );
        }

    }

    renderForm = () =>
        <div>
            <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
                <h1>Add New Game</h1>

                {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

                <div className={classnames('field', { error: !!this.state.errors.title })}>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.errors.title}</span>
                </div>
                <div className={classnames('field', { error: !!this.state.errors.cover })}>
                    <label htmlFor="cover">Cover URL</label>
                    <input
                        id="cover"
                        name="cover"
                        value={this.state.cover}
                        onChange={this.handleChange}
                    />
                    <span>{this.state.errors.cover}</span>
                </div>

                {this.state.cover.trim() !== '' &&
                    <div className="field">
                        <img src={this.state.cover} alt="cover" className="ui small bordered image" />
                    </div>
                }

                <div className="field">
                    <button className="ui primary button">Save</button>
                </div>
            </form>
        </div>

    render() {
        return (
            <div>
                {this.state.done ? <Redirect to="/games"/> : this.renderForm()}
            </div>
        )
    }
}
export default connect(null, { saveGame })(GameForm);