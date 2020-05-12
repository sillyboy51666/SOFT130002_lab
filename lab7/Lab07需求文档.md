lab7设计文档
====================
## 作业网址  

https://github.com/sillyboy51666/SOFT130002_lab/tree/master/lab7

---------------------------
## 1. 查找HTML界面中的HTML元素

查找HTML元素代码如下：
````
document.getElementsByClassName("flex-container justify")
````

值得注意的是getElementById()方法返回的是HTML元素，而getElementByClassName()返回的是相同class名的HTML元素的数组

---------------------------------------------
## 2. 创建和添加HTML元素

创建添加HTML元素的代码如下：
```
item = document.createElement("div");
genre = document.createElement("h4");
information = document.createElement("div");
author = document.createElement("h3");
lifetime = document.createElement("h5");
popularPhotos = document.createElement("div");
popularPhotoTopic = document.createElement("h3");
visit = document.createElement("button");

item.appendChild(genre);
item.appendChild(information);
item.appendChild(popularPhotos);
item.appendChild(visit);
```

createElement()方法是创建一个指定的HTML元素
appendChild是在某一个HTML元素内添加子元素

---------------------------------------
## 3. 困难和方法

感觉整个lab最难的部分在于通过效果图理清需要创建哪一些HTML元素，元素之间的关系是什么，同时需要给这些元素添加什么样的属性。

我的解决方法就是先通过效果图确定我将要创建的HTML元素，给这些对象命名，画出一个逻辑图之后再开始写代码，这样整体的思路会更加清晰一点。
整个lab需要重复添加的HTML元素比较多，我采用循环的方法来减少代码量，感觉效果也不是特别好，也没有寻求到别的方法。