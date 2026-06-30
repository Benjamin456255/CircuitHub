// CircuitHub — Resource & Community Data

const RESOURCES = [
  { type:"教程", title:"KiCad 8.0 官方文档：从原理图到 Gerber", desc:"KiCad 官方中文教程，涵盖原理图编辑器 Eeschema、PCB 编辑器 Pcbnew、封装管理及 Gerber 生成，适合零基础入门。", tags:["tutorial","pcb"], link:"https://docs.kicad.org/8.0/zh/", author:"KiCad 开发团队", time:"持续更新", stars:0 },
  { type:"教程", title:"PCB 布局布线基础：信号完整性入门", desc:"TI 应用笔记 SLLA279A，讲解传输线、阻抗匹配、叠层设计，附计算示例。", tags:["tutorial","pcb","theory"], link:"https://www.ti.com/lit/an/slla279a/slla279a.pdf", author:"Texas Instruments", time:"2024", stars:0 },
  { type:"仿真", title:"Falstad 在线电路模拟器", desc:"浏览器内实时交互式电路仿真，支持模拟/数字混合电路，电流电压可视化。无需安装。", tags:["simulation"], link:"https://www.falstad.com/circuit/", author:"Paul Falstad", time:"持续维护", stars:0 },
  { type:"仿真", title:"LTSpice 24 — 官方 SPICE 仿真工具", desc:"Analog Devices 推出的免费 SPICE 仿真器，瞬态分析、交流扫描、噪声分析，自带大量器件模型。", tags:["simulation"], link:"https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html", author:"Analog Devices", time:"持续更新", stars:0 },
  { type:"仿真", title:"ngspice — 开源 SPICE 仿真引擎", desc:"经典开源电路仿真器，BSIM4/BSIM6 MOSFET 模型，可与 KiCad 集成进行原理图仿真。", tags:["simulation","opensource"], link:"https://ngspice.sourceforge.io/", author:"ngspice 社区", time:"v43 2024", stars:0 },
  { type:"开源", title:"Arduino Uno R4 开源参考设计", desc:"Arduino 官方 Uno R4 完整原理图与 PCB 设计文件，Altium 格式，适合学习 MCU 外围电路设计。", tags:["opensource","pcb"], link:"https://docs.arduino.cc/hardware/uno-r4-minima/", author:"Arduino", time:"2024", stars:0 },
  { type:"开源", title:"Raspberry Pi Pico 参考设计", desc:"RP2040 最小系统参考设计，含电源管理、USB 及 IO 外围电路，KiCad 源文件完全开放。", tags:["opensource","pcb"], link:"https://datasheets.raspberrypi.com/pico/pico-datasheet.pdf", author:"Raspberry Pi Foundation", time:"2024", stars:0 },
  { type:"书籍", title:"《The Art of Electronics》(第3版)", desc:"Horowitz & Hill 著，电子工程领域公认权威参考书。从基础元件到高级设计，覆盖模拟与数字电路。", tags:["book","theory"], link:"https://artofelectronics.net/", author:"Paul Horowitz, Winfield Hill", time:"2015", stars:0 },
  { type:"书籍", title:"《Signal and Power Integrity — Simplified》(第3版)", desc:"Eric Bogatin 著，信号/电源完整性入门经典。时域频域概念、PDN 设计方法。", tags:["book","theory"], link:"https://www.signalintegrityjournal.com/", author:"Eric Bogatin", time:"2018", stars:0 },
  { type:"书籍", title:"《High Speed Digital Design》", desc:"Howard Johnson 著，高速数字电路必读经典。传输线、串扰、时序与电源分配。", tags:["book","theory"], link:"#", author:"Howard Johnson, Martin Graham", time:"1993", stars:0 },
  { type:"教程", title:"Phil's Lab — PCB 设计实战 (YouTube)", desc:"高质量 KiCad/Altium PCB 设计教程，STM32/FPGA 项目从原理图到 Layout 全过程。", tags:["tutorial","pcb"], link:"https://www.youtube.com/@PhilsLab", author:"Phil's Lab", time:"持续更新", stars:0 },
  { type:"教程", title:"Robert Feranec — 高速 PCB 设计进阶 (YouTube)", desc:"高速数字与混合信号 PCB 设计实操：DDR4/PCIe 布线、阻抗控制、EMC 设计。", tags:["tutorial","pcb","theory"], link:"https://www.youtube.com/@RobertFeranec", author:"Robert Feranec", time:"持续更新", stars:0 },
];

const POSTS = [
  { channel:"schematic", author:"老周", avatar:"周", title:"LM358 差分放大器 CMRR 实测仅 40dB，和仿真差了 20dB", excerpt:"LTSpice 仿真 CMRR 约 60dB，实际打样后不到 40dB。排查发现两个输入端走线差了 8mm，未做 guard ring。低频(<10kHz)下这种失配影响这么大？", time:"4 小时前", upvotes:18, replies:11, tags:["模拟电路","差分放大器","CMRR"] },
  { channel:"pcb", author:"Layout学徒", avatar:"徒", title:"4 层板叠层请教：SIG-GND-PWR-SIG vs SIG-GND-GND-SIG", excerpt:"STM32H723 + DDR3L 533MHz，JLCPCB 2313 叠层下参考平面隔着 47mil 太远。DDR 走线在顶层，是否改 SIG-GND-GND-SIG？", time:"6 小时前", upvotes:27, replies:19, tags:["PCB","叠层设计","DDR3L","阻抗控制"] },
  { channel:"showcase", author:"DigitalCraft", avatar:"DC", title:"[项目] 自制 100MHz 四通道逻辑分析仪 — Cypress FX2LP + sigrok", excerpt:"CY7C68013A + 74LVC245 缓冲，24MHz 晶振，sigrok/PulseView 上位机。4 层板，USB 高速 480Mbps，KiCad 工程完全开源。附实测效果。", time:"1 天前", upvotes:156, replies:43, tags:["逻辑分析仪","FX2LP","sigrok","开源"] },
  { channel:"sharing", author:"Datasheet猎人", avatar:"猎", title:"TI 精密运放选型速查表（Vos/GBW/噪声/价格）", excerpt:"整理 TI 在产 60+ 款精密运放关键参数速查表：OPAx277、OPAx189、OPAx388、OPAx328 等。按 Vos 排序，标注 GBW、en、SR、Iq、封装和批量价。", time:"1 天前", upvotes:89, replies:12, tags:["运放选型","TI","资源"] },
  { channel:"simulation", author:"SPICE玩家", avatar:"SP", title:"LTSpice 仿真 Buck 环路稳定性：如何正确注入 AC 信号？", excerpt:"TPS5430 Buck 电路波特图仿真，按 Ridley 中断注入法加 AC 源。仿真相位裕度 15°，实测 55°，差距大。注入点位置和阻抗设置有讲究？", time:"2 天前", upvotes:34, replies:18, tags:["LTSpice","Buck","环路稳定性","波特图"] },
  { channel:"schematic", author:"射频萌新", avatar:"射", title:"2.4GHz PCB 天线阻抗匹配 — 实测 S11 与仿真差 -8dB", excerpt:"参考 TI AN043 做倒 F 天线，HFSS 仿真 S11=-18dB @ 2.45GHz。FR-4 打板后 NanoVNA 测仅 -10dB。εr 差异是主因？", time:"3 天前", upvotes:22, replies:16, tags:["天线","阻抗匹配","FR4","HFSS"] },
  { channel:"help", author:"转行硬件", avatar:"转", title:"第一次打样 0402 焊盘太大焊不上 — KiCad 封装选择问题", excerpt:"用的 IPC 7351 Density Level A 封装，焊盘间距比电容还宽。手焊应该用 Level C。求推荐 KiCad 手焊封装库。", time:"3 天前", upvotes:45, replies:28, tags:["KiCad","封装","0402","焊接"] },
  { channel:"showcase", author:"RetroTech", avatar:"RT", title:"[项目] 复刻 SEGA Genesis 卡带 PCB — 支持现代 NOR Flash", excerpt:"逆向老卡带 PCB 后重新设计，SST39SF040 替代 Mask ROM，CPLD 做地址解码。4 层板，亚光黑沉金，开源 KiCad + Gerber。", time:"4 天前", upvotes:278, replies:67, tags:["复古","逆向工程","SEGA","开源硬件"] },
];

// ===== Featured Technical Articles (real sources) =====
const FEATURED_ARTICLES = [
  {
    title:"Successful PCB Grounding with Mixed-Signal Chips — Part 1: Principles of Current Flow",
    desc:"信号完整性与 EMC 领域权威 Henry Ott 关于混合信号 PCB 接地策略的经典系列文章。从电流回路基本原理出发，阐述分区接地、分割平面的误区与正确方案。",
    source:"Henry Ott Consultants",
    author:"Henry W. Ott",
    link:"https://www.hottconsultants.com/techtips/pcb-stackup-1.html",
    date:"2001",
    tags:["接地","混合信号","EMC"]
  },
  {
    title:"Decoupling Techniques — MT-101 Tutorial",
    desc:"Analog Devices 官方教程，系统讲解去耦电容的选择、布局与 PCB 布线要点。涵盖局部去耦与全局去耦、电容谐振频率与 ESL 影响。",
    source:"Analog Devices",
    author:"Analog Devices (MT-101)",
    link:"https://www.analog.com/media/en/training-seminars/tutorials/MT-101.pdf",
    date:"2009",
    tags:["去耦","电源完整性","ADI"]
  },
  {
    title:"High-Speed Layout Guidelines — TI Application Report SCAA082",
    desc:"TI 官方高速 PCB 布线指南。涵盖传输线类型选择（微带线/带状线）、阻抗控制、差分对布线、过孔设计与串扰抑制。",
    source:"Texas Instruments",
    author:"Texas Instruments (SCAA082)",
    link:"https://www.ti.com/lit/an/scaa082a/scaa082a.pdf",
    date:"2017",
    tags:["高速","布线","阻抗","TI"]
  },
  {
    title:"PCB Layout Techniques for Buck Converters — TI Application Note SLVA958",
    desc:"从开关电源的 di/dt 回路出发，详细解读 Buck 变换器 PCB 布局六大原则：最小化热回路、输入电容位置、SW 节点处理等。",
    source:"Texas Instruments",
    author:"Texas Instruments (SLVA958)",
    link:"https://www.ti.com/lit/an/slva958b/slva958b.pdf",
    date:"2023",
    tags:["Buck","开关电源","布局","TI"]
  },
  {
    title:"The Engineer's Guide to High-Quality PCB Design",
    desc:"AD 高级应用工程师 John Ardizzoni 撰写的 PCB 设计指南。从原理图到 Layout，覆盖接地、电源分配、散热、信号路由等核心主题。",
    source:"Analog Devices / Electronic Design",
    author:"John Ardizzoni (Analog Devices)",
    link:"https://www.analog.com/en/resources/technical-articles/high-quality-pcb-design.html",
    date:"2018",
    tags:["PCB设计","全面指南","ADI"]
  },
  {
    title:"Right Half Plane Zero — Understanding Its Effects in Boost and Buck-Boost Converters",
    desc:"Ridley Engineering 关于右半平面零点（RHPZ）的经典技术文章。量化分析 RHPZ 对反馈环路稳定性的影响及补偿策略。",
    source:"Ridley Engineering / Switching Power Magazine",
    author:"Ray Ridley",
    link:"https://ridleyengineering.com/design-center-ridley-engineering/37-uncategorised/139-053-right-half-plane-zero.html",
    date:"2015",
    tags:["RHPZ","环路稳定性","开关电源","Ridley"]
  },
  {
    title:"A Practical Guide to High-Speed Printed-Circuit-Board Layout",
    desc:"Analog Devices 资深工程师撰写的实用高速 PCB 布局指南。从层叠规划到差分对布线，每一条建议都经过了实际项目的验证。",
    source:"Analog Dialogue (Analog Devices)",
    author:"John Ardizzoni (Analog Devices)",
    link:"https://www.analog.com/en/resources/analog-dialogue/articles/high-speed-printed-circuit-board-layout.html",
    date:"2012",
    tags:["高速","PCB","差分对","ADI"]
  },
  {
    title:"Stay Well Grounded — The Essentials of Grounding",
    desc:"Analog Dialogue 接地专题。从单点接地、多点接地到混合接地，系统梳理模拟与数字电路中的接地哲学与实践。",
    source:"Analog Dialogue (Analog Devices)",
    author:"James Bryant (Analog Devices)",
    link:"https://www.analog.com/en/resources/analog-dialogue/articles/stay-well-grounded.html",
    date:"2006",
    tags:["接地","模拟电路","ADI"]
  },
];

const PROJECTS = [
  { title:"KiCad 官方封装库", desc:"KiCad 开发团队维护的官方符号库与封装库，覆盖阻容感、连接器、IC 封装。GitHub 开源，持续更新。", tags:["component-lib"], author:"KiCad 官方", stars:0, contributors:220 },
  { title:"Open Components Library (OCL)", desc:"社区驱动的开源 EDA 元件库，KiCad/Altium/Eagle 多格式导出，含 3D STEP 模型，DRC 验证通过。", tags:["component-lib"], author:"OCL 社区", stars:0, contributors:89 },
  { title:"SparkFun Eagle 元件库", desc:"SparkFun 所有开源产品的 Eagle 封装库，数百个生产验证封装，适合学习封装设计规范。", tags:["component-lib"], author:"SparkFun Electronics", stars:0, contributors:45 },
  { title:"openPMU — 开源相量测量单元", desc:"基于 STM32 的同步相量测量装置，IEEE C37.118 标准。原理图+PCB+固件 DSP 开源。", tags:["opensource","instrument"], author:"openPMU 项目组", stars:0, contributors:12 },
  { title:"LibreSolar BMS", desc:"开源锂电池 BMS，3-16 串，主动均衡、CAN 通信、ISO 26262 功能安全设计。", tags:["opensource"], author:"LibreSolar", stars:0, contributors:23 },
  { title:"OpenVentilator PCB", desc:"疫情期间社区协作的开源呼吸机控制板，STM32F407，压力传感器+步进电机+报警电路。", tags:["opensource"], author:"OpenVentilator 社区", stars:0, contributors:67 },
];

function tagLabel(tag) {
  const map = { tutorial:"入门教程", simulation:"仿真工具", pcb:"PCB设计", opensource:"开源项目", book:"书籍推荐", theory:"理论入门", "component-lib":"元件库", tool:"工具", instrument:"仪器" };
  return map[tag] || tag;
}
function channelLabel(ch) {
  const map = { schematic:"电路图讨论", help:"新手求助", showcase:"项目展示", sharing:"资源分享", simulation:"仿真交流", pcb:"PCB设计" };
  return map[ch] || ch;
}
