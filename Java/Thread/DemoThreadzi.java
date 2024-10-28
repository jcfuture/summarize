package Summarize.Thread;

public class DemoThreadzi {
     /*多线程：
        并发：指两个事件或多个事件在同一时间内发生
        并行：指两个事件或多个事件在同一时刻发生（同时发生）
    线程与进程
        进程：是指一个内存中运行的应用程序，每个进程都有一个独立的内存空间，一个应用程序可以同时运行多个
        进程，进程是程序的一次执行过程是系统运行程序的基本单位，系统与运行一个程序即是一个进程从创建，运行
        到消亡的过程。
        线程：线城市进程的一个执行单元，负责当前进程中程序的执行，一个进程中至少有一个线程，一个进程中是可以
        有多个线程的，这个应用程序也可以称之为多线程程序。                   多线程好处：效率快
        简而言之：一个程序至少有一个进程，一个进程中可以包含多个线程
    线程调度
        分时调度：所有线程轮流使用CPU的使用权，平均分配每个线程占用的CPU时间
        抢夺式调度：优先让优先级高的线程使用CPU，如果线程的优先级相同，那么会随机选择一个（线程随机性），
        java使用抢夺式调度。
        任务管理器-->详细信息-->设置优先级
    主线程：执行主方法的线程（main）
        单线程程序：java程序中只有一个线程
        执行从main方法执行，从上到下依次执行
        Jvm执行了main方法，main方法会进入栈内存
        Jvm会找到操作系统开辟一条main方法通向CPU的路径
        CPU就可以通过这个路径来执行main方法
        而这个路径有一名字，叫做main（主）线程
    创建多线程的第一种方式_创建Thread的子类     Thread描述现成的类
        Jvm虚拟机允许应用程序并发的运行多个执行线程
      实现步骤
         1、创建一个Thread的子类
         2、在Thread类的子类中重写Thread类中的run方法，设置线程任务（开启线程要做什么）
         3、创建Thread类的子类对象
         4、调用Thread中的start（）方法，开辟新的线程，执行run方法
         void	start()	导致此线程开始执行;Java 虚拟机调用此线程的方法。run
         结果是两个线程并发的运行当前线程（从调用返回给start方法）和另一线程（执行其run方法）
         多次启动一个线程是非法的，特别是当线程已经结束执行后，不能再重新启动
      Java程序是抢占式调度，线程优先级越高，那个优先执行那个，同意优先级随机选择一个执行*/

    //创建Thread子类的对象
    public static void main(String[] args) {
        new Demo().start();//创建Thread的子类并开启线程
        for (int i = 0; i < 20; i++) {
            System.out.println("main"+i);
        }
    }
    //多线程的好处：多个线程之间互不影响（不同的栈空间）

}

//创建Thread的子类
class Demo extends Thread{

    //重写run方法
    @Override
    public void run() {
        for (int i = 0; i < 20; i++) {
            System.out.println("run"+i);
        }
    }
}
