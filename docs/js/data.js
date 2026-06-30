// CircuitHub — Shared Data

const RESOURCES = [
  { type:"教程", title:"KiCad 入门：从原理图到 PCB", desc:"涵盖元件库管理、原理图绘制、PCB 布局布线及 Gerber 导出全流程。适合零基础入门。", tags:["tutorial","pcb"], link:"https://docs.kicad.org", author:"CircuitHub 社区", time:"2026-06-18", stars:342 },
  { type:"教程", title:"PCB 布局布线核心原则", desc:"讲解信号完整性、电源分配、接地策略及 EMI 控制的基础方法与实践。", tags:["tutorial","pcb","theory"], link:"#", author:"L. Chen", time:"2026-06-15", stars:287 },
  { type:"仿真", title:"Falstad 在线电路模拟器", desc:"浏览器内实时电路仿真，支持模拟/数字混合电路，可视化电流与电压。可直接嵌入网页。", tags:["simulation"], link:"https://www.falstad.com/circuit/", author:"Paul Falstad", time:"—", stars:1024 },
  { type:"仿真", title:"LTSpice 入门与进阶技巧", desc:"从直流工作点分析到交流扫描、瞬态仿真，包含模型导入与参数扫描方法。", tags:["simulation","tutorial"], link:"https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html", author:"Analog Devices", time:"—", stars:567 },
  { type:"开源", title:"Arduino Uno 开源参考设计", desc:"完整 Arduino Uno R3 原理图与 PCB 文件，Eagle 格式，适合学习与二次开发。", tags:["opensource","pcb"], link:"https://www.arduino.cc/en/Main/ArduinoBoardUno", author:"Arduino Team", time:"2026-04-02", stars:891 },
  { type:"开源", title:"开源可调电源模块", desc:"基于 LM2596 的 DC-DC 降压模块，含完整 BOM 与 PCB 文件（KiCad 格式）。", tags:["opensource","pcb"], link:"#", author:"PCB_Explorer", time:"2026-05-20", stars:156 },
  { type:"书籍", title:"《实用电子元器件与电路基础》", desc:"Paul Scherz 著，从基础元件到实际电路设计的全面指南，适合自学与参考。", tags:["book","theory"], link:"#", author:"Paul Scherz", time:"—", stars:445 },
  { type:"书籍", title:"《The Art of Electronics》第3版", desc:"Horowitz & Hill 经典之作，电子工程领域最受推崇的参考书之一，常备案头。", tags:["book","theory"], link:"#", author:"Horowitz & Hill", time:"—", stars:1203 },
  { type:"教程", title:"高速数字电路 PCB 设计要点", desc:"阻抗匹配、差分对布线、层叠设计及过孔优化的实用指南。", tags:["tutorial","pcb","theory"], link:"#", author:"M. Zhao", time:"2026-06-10", stars:198 },
  { type:"仿真", title:"QUCS 开源电路仿真入门", desc:"Quite Universal Circuit Simulator，支持 S 参数、谐波平衡等多种仿真模式。", tags:["simulation","opensource"], link:"https://qucs.sourceforge.net/", author:"Qucs Team", time:"—", stars:312 },
  { type:"开源", title:"ESP32 最小系统板设计", desc:"基于 ESP32-WROOM 的最小系统板，含 USB 转串口、电源管理，KiCad 源文件。", tags:["opensource","pcb"], link:"#", author:"IoT_Builder", time:"2026-06-05", stars:234 },
  { type:"书籍", title:"《信号完整性分析》", desc:"Eric Bogatin 著，从时域与频域角度深入理解高速电路中的信号完整性问题。", tags:["book","theory"], link:"#", author:"Eric Bogatin", time:"—", stars:378 },
];

const POSTS = [
  { channel:"schematic", author:"模电老张", avatar:"老", title:"关于差分放大器共模抑制比的优化讨论", excerpt:"在设计中遇到 CMRR 不达标的问题，试了几种匹配方法……最后发现是 PCB 布局的对称性问题。", time:"3 小时前", upvotes:24, replies:8, tags:["模拟电路","放大器"] },
  { channel:"help", author:"新手小王", avatar:"王", title:"刚学 KiCad，元件封装选错了怎么批量替换？", excerpt:"画完原理图才发现选的 0805 封装，实际需要 0603，有没有办法批量修改？", time:"5 小时前", upvotes:12, replies:15, tags:["KiCad","封装"] },
  { channel:"showcase", author:"DigitalCraft", avatar:"DC", title:"[项目展示] 自制 4 层 STM32F407 开发板", excerpt:"花了三周设计+打样，分享一下 Layout 心得和测试结果，附 KiCad 工程文件。", time:"1 天前", upvotes:89, replies:32, tags:["STM32","4层板","项目"] },
  { channel:"sharing", author:"资源猎人", avatar:"猎", title:"发现一个超全的元器件 3D 模型库", excerpt:"支持 STEP 格式导入 KiCad，覆盖大部分常用元件，链接在正文中。", time:"1 天前", upvotes:45, replies:6, tags:["3D模型","资源"] },
  { channel:"simulation", author:"SPICE_Guru", avatar:"SG", title:"LTSpice 中变压器模型怎么建？", excerpt:"尝试用耦合电感建模，但仿真结果与实测差距大，求教正确的非线性磁芯模型。", time:"2 天前", upvotes:18, replies:11, tags:["LTSpice","变压器","模型"] },
  { channel:"schematic", author:"LayoutPro", avatar:"LP", title:"DDR4 布线经验总结——等长与阻抗控制", excerpt:"实际项目中 DDR4 走线的关键参数选择与等长处理，附眼图仿真结果。", time:"2 天前", upvotes:56, replies:14, tags:["DDR4","高速","布线"] },
  { channel:"help", author:"学生小刘", avatar:"刘", title:"毕业设计求助：无线充电电路效率太低", excerpt:"用的 XKT-510 方案，实测效率只有 40%，检查了线圈匹配和整流部分，求助！", time:"3 天前", upvotes:8, replies:22, tags:["无线充电","效率","求助"] },
  { channel:"showcase", author:"RetroTech", avatar:"RT", title:"[项目展示] 复刻经典 Game Boy 卡带 PCB", excerpt:"逆向工程+重新设计，支持现代 Flash 芯片，开源全部设计文件供下载。", time:"3 天前", upvotes:134, replies:41, tags:["复古","开源","GameBoy"] },
];

const PROJECTS = [
  { title:"社区共享元件封装库", desc:"由社区成员共同维护的 KiCad 封装库，覆盖常用连接器、电源模块与 MCU。每周更新。", tags:["component-lib"], author:"CircuitHub 社区", stars:203, contributors:34 },
  { title:"电路图符号库 v2.1", desc:"标准化的电路图符号集，支持 KiCad / Eagle / EasyEDA 多格式导出，开源维护。", tags:["component-lib"], author:"OpenSymbols Team", stars:178, contributors:21 },
  { title:"PCB DRC 规则脚本集", desc:"一套用于 KiCad DRC 的自定义规则脚本，覆盖常见制造工艺要求（JLCPCB / PCBWay）。", tags:["tool"], author:"PCB_Toolsmith", stars:89, contributors:7 },
  { title:"开源 LCR 表设计", desc:"基于 STM32 的高精度手持 LCR 表，完整原理图 + 固件 + 外壳 STEP 文件。", tags:["opensource","instrument"], author:"ImpedanceLab", stars:312, contributors:15 },
  { title:"社区 BOM 优化工具", desc:"根据实时库存与价格自动优化 BOM 的 Web 工具，支持 LCSC / DigiKey / Mouser。", tags:["tool"], author:"BOM_Optimizer", stars:67, contributors:5 },
  { title:"差分探头开源设计", desc:"100MHz 带宽差分探头，完整模拟前端 + PCB 设计，适合示波器测量使用。", tags:["opensource","instrument"], author:"ProbeMaster", stars:145, contributors:9 },
];

function tagLabel(tag) {
  const map = { tutorial:"入门教程", simulation:"仿真工具", pcb:"PCB设计", opensource:"开源项目", book:"书籍推荐", theory:"理论入门", "component-lib":"组件库", tool:"工具", instrument:"仪器" };
  return map[tag] || tag;
}

function channelLabel(ch) {
  const map = { schematic:"电路图讨论", help:"新手求助", showcase:"项目展示", sharing:"资源分享", simulation:"仿真交流" };
  return map[ch] || ch;
}
