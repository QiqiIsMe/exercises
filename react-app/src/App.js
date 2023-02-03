import './App.css';

const addRemote = async (a, b) => new Promise(resolve => {
  setTimeout(() => resolve(a + b), Math.floor(Math.random() * 100))
});

// 请实现本地的add方法，调用 addRemote，能最优的实现输入数字的加法。 
async function add(...inputs) {
  // 你的实现 
} 
// 测试用例
add(5, 6).then(result => {
  console.log(result); // 11
});
add(1, 4, 3, 3, 5).then(result => {
  console.log(result); // 16
})
add(2, 3, 3, 3, 4, 1, 3, 3, 5).then(result => {
  console.log(result); // 27
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>请实现 App.js 中 add 方法，当用户在输入框中输入多个数字(逗号隔开)时，</div>
        <div>点击相加按钮能显示最终结果</div>
      </header>
      <section className="App-content">
        <input type="text" placeholder="请输入要相加的数字（如1,3,4,5,6）" />
        <button>相加</button>
      </section>
      <section className="App-result">
        <p>相加结果是：<span>{'{你的计算结果}'}</span></p>
      </section>
    </div>
  );
}

export default App;
