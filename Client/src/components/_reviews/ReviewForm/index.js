import React,{Component} from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {date: new Date(Date.now()), userId: "", photo: "", title: "", revContent:"", rating:0}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    checkNotEmpty() {
        for(var key in this.state) {
            if(!this.state[key]) {
                alert('Please Fill up all the values and submit again.')
                return false;
            }
        }
        return true;
    }

    emptyState() {
        this.setState({userId: ""})
        this.setState({photo: ""})
        this.setState({title: ""})
        this.setState({revContent:""})
        this.setState({rating:0})
    }

    handleSubmit() {
        if(this.checkNotEmpty()) {
            this.props.onNewReview(this.state);
        }
        this.emptyState();
    }

    handleFieldUpdate(e) {
        var field = e.target.name;
        this.setState({[field]: e.target.value})
    }
    
    render() {
        return (
            <div className="review-form">
                <div className="addreview-title">Submit a review:</div>
                <lable>User Id:      <input type="text" name="userId" value={this.state.userId}
                                            onChange={(e)=> {this.handleFieldUpdate(e)}}/></lable>
                <lable>User Photo:   <input type="text" name="photo" value={this.state.photo}
                                            onChange={(e)=> {this.handleFieldUpdate(e)}}/></lable>   
                <lable>Review Title: <input type="text" name="title" value={this.state.title}
                                            onChange={(e)=> {this.handleFieldUpdate(e)}}/></lable>
                <lable>Content:   <textarea name="revContent" rows="5" value={this.state.revContent}
                                            onChange={(e)=> {this.handleFieldUpdate(e)}}/></lable>   
                <lable>Rating:       <input type="number" name="rating" min="1" max="5" value={this.state.rating}
                                            onChange={(e)=> {this.handleFieldUpdate(e)}}/></lable>
                <button onClick={this.handleSubmit}>Submit Review</button>
            </div>
        )
    }
}