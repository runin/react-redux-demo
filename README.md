react-redux 简单购物车加减计算实现
####  Provider组件实践（app.js）
- 1.导入Provider组件，在react-redux中进行导入<br/>
- 2.需要利用Provider组件，对我们整个结构进行导入<br/>
- 3.给我们Provider组件设置store的属性，而这个值就是我们通过createStore构建出来的store实例对象
#### connect
**ComA组件 加法 发送action**
- 1.导入connect
- 2.利用connect对组件进行加强<br/>
    connect(要接受数据的函数， 要发送action的函数)(放入要加强的组件)
- 3.构建了一个函数 mapDispatchToProps(dispatch),dispatch就是用来发送action的
- 4.在这个函数里面就可以返回一个对象，key是方法名，value：调用dispatch去发送action
- 5. 在组件里的内容 就可以通过 this.props来拿到这个方法<br/>

**ComB组件 展示数据 接收最新state**
- 1.导入connect
- 2.利用connect对组件进行加强
- 3.ComB属于接受数据，就需要实现connect的第一个参数
- 4.mapStateTpProps里面的一个参数就是我们关心的 state
- 5.把这个state进行return才能在组件的内部获取到 最新的数据
- 6. ComB是否能拿到数据，关键点是 reducer
- 7.只有reducer里面返回了新的state的时候，我们组件ComB才能获取到最新state