package Summarize.NetworkProgramming;

public class NetworkProgrammingConcepts {
    /*软件结构：
    * C/S结构：全称Client/Server结构，是指客户端和服务器结构（常见程序有QQ，微信等）
    * B/S结构：全称为Browser/Server结构，是指服务器结构，常见浏览器有谷歌，火狐等。
    * 无法离开网络的支持，网络编程就是在一定协议下，实现计算机的通信的程序*/

    /*网络通信协议（规则）
    * 他对数据的传输格式，传输速率，传输步骤等做了统一规定，通信双方必须同时遵守，才能完成数据互换。
    * TCP/IP协议：传输控制协议/网际协议（Transmission Control Protocol / Internet Protocol）是Internet最基本，最广泛的协议*/

    /*网络通信协议分类：
    * UDP（USER Datagram Protocol） 用户数据协议是无连接通信协议，在数据传输时，数据的发送端和接收端不建立逻辑连接。由于UDP协议消耗资源小，
    * 通信效率高，所以通常都会用于音频，视频和普通数据的传输，传输重要的数据时，不建议使用UDP协议。
    * 特点：数据被限制在64kb以内，超出这个范围就不能发送了。
    * TCP（Transmission Control Protocol） 传输控制协议，TCP协议是面向连接的通信协议，及传输之前，在发送端和接收端之间，建立逻辑链接，
    * 提供了两台计算机无差错的数据传输*/

    /*在TCP链接中必须明确客户端和服务端，每次连接都需要经过“三次握手”
    * 三次握手：TCP协议中，在发送数据的准备阶段，客户端和服务器之间的三次交互，以保证链接的可靠性
    *   第一次握手：客户端向服务端发出连接请求，等待服务器确认
    *   第二次握手：服务端向客户端回送一个响应，通知客户端收到了连接请求
    *   第三次握手：客户端再次向服务端发送确认信息，确认链接
    * 完成三次握手后，建立连接后，客户端和服务器端就可以进行数据传输了，由于这种面向连接的协议，TCP协议可以保证数据传输的安全，所以应用十分广泛。
    * 例如下载文件，浏览网页等。*/

    /*网络协议特点：
    *   UDP:效率高，但是不安全
    *   TCP:安全，但效率低*/

    /*网络编程三要素：
    *   协议：IP地址和端口号
    *   协议即规则
    *   IP地址：指互联网协议地址（Internet Protocol Address）俗称IP，IP地址用来给一个网络中的计算机设置作唯一的编号。加入我们把一台电脑比作一台电话的
    * 手机号，那么IP地址就好比电话号。*/
}
