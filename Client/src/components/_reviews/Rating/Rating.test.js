import Rating from './';

describe('<Rating />', () => {

    let wrapper;
    // wrapper = shallow(<Rating value={5}/>);

    it ("should render 5 stars correctly", () => {
        wrapper = shallow(<Rating/>)
        expect(wrapper.find('div').children()).to.have.lengthOf(5);
    })

    it ("should render <value> full stars correctly", () => {
        wrapper = shallow(<Rating value={4}/>)
        expect(wrapper.find('.fa-star')).to.have.lengthOf(4);
    })

    it ("should throw an error if value is greater then 5", () => {
        wrapper = shallow(<Rating value={6}/>)
        expect(wrapper).to.throw(Error);
    })
    
    it ("should throw an error if value is less then 1")
})

