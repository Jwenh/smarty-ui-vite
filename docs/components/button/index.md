# Button 按钮
常用操作按钮

## 基础用法

基础的函数用法


## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo

 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。


 <div class="flex flex-row">
  <SButton icon="edit" plain></SButton>
  <SButton icon="delete" plain></SButton>
  <SButton icon="share" plain></SButton>
  <SButton round plain icon="search">搜索</SButton>
 </div>
 
```html
<div class="flex flex-row">
  <SButton icon="edit" plain></SButton>
  <SButton icon="delete" plain></SButton>
  <SButton icon="share" plain></SButton>
  <SButton round plain icon="search">搜索</SButton>
 </div>
```
:::