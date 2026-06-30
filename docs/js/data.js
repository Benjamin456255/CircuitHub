// CircuitHub — Resource & Community Data

const RESOURCES = [
  {
    type: "教程",
    title: "KiCad 8.0 官方文档：从原理图到 Gerber",
    desc: "KiCad 官方中文教程，涵盖原理图编辑器 Eeschema、PCB 编辑器 Pcbnew、封装管理及 Gerber 生成，适合零基础入门。",
    tags: ["tutorial", "pcb"],
    link: "https://docs.kicad.org/8.0/zh/",
    author: "KiCad 开发团队",
    time: "持续更新",
    stars: 0
  },
  {
    type: "教程",
    title: "PCB 布局布线基础：信号完整性入门",
    desc: "TI 官方应用笔记，讲解传输线基本概念、阻抗匹配原则及叠层设计方法，附带计算示例。",
    tags: ["tutorial", "pcb", "theory"],
    link: "https://www.ti.com/lit/an/slla279a/slla279a.pdf",
    author: "Texas Instruments",
    time: "2024",
    stars: 0
  },
  {
    type: "仿真",
    title: "Falstad 在线电路模拟器",
    desc: "浏览器内实时交互式电路仿真，支持模拟/数字混合电路，电流电压可视化。无需安装，教学演示首选。",
    tags: ["simulation"],
    link: "https://www.falstad.com/circuit/",
    author: "Paul Falstad",
    time: "持续维护",
    stars: 0
  },
  {
    type: "仿真",
    title: "LTSpice 24 — 官方 SPICE 仿真工具",
    desc: "Analog Devices 推出的免费 SPICE 仿真器，支持瞬态分析、交流扫描、噪声分析，自带大量器件模型。",
    tags: ["simulation"],
    link: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html",
    author: "Analog Devices",
    time: "持续更新",
    stars: 0
  },
  {
    type: "仿真",
    title: "ngspice — 开源 SPICE 仿真引擎",
    desc: "经典开源电路仿真器，支持 BSIM4/BSIM6 MOSFET 模型，可与 KiCad 集成进行原理图仿真。",
    tags: ["simulation", "opensource"],
    link: "https://ngspice.sourceforge.io/",
    author: "ngspice 社区",
    time: "v43 2024",
    stars: 0
  },
  {
    type: "开源",
    title: "Arduino Uno R4 开源参考设计",
    desc: "Arduino 官方发布的 Uno R4 完整原理图与 PCB 设计文件，Altium 格式，适合学习 MCU 外围电路设计。",
    tags: ["opensource", "pcb"],
    link: "https://docs.arduino.cc/hardware/uno-r4-minima/",
    author: "Arduino",
    time: "2024",
    stars: 0
  },
  {
    type: "开源",
    title: "Raspberry Pi Pico 参考设计",
    desc: "基于 RP2040 的最小系统参考设计，包含电源管理、USB 及 IO 外围电路，KiCad 源文件完全开放。",
    tags: ["opensource", "pcb"],
    link: "https://datasheets.raspberrypi.com/pico/pico-datasheet.pdf",
    author: "Raspberry Pi Foundation",
    time: "2024",
    stars: 0
  },
  {
    type: "书籍",
    title: "《The Art of Electronics》(第3版)",
    desc: "Horowitz & Hill 著，电子工程领域公认的权威参考书。从基础元件到高级设计，覆盖模拟与数字电路全领域。",
    tags: ["book", "theory"],
    link: "https://artofelectronics.net/",
    author: "Paul Horowitz, Winfield Hill",
    time: "2015 (第3版)",
    stars: 0
  },
  {
    type: "书籍",
    title: "《Signal and Power Integrity — Simplified》(第3版)",
    desc: "Eric Bogatin 著，信号完整性与电源完整性领域的入门经典。从时域/频域基本概念到 PDN 设计方法。",
    tags: ["book", "theory"],
    link: "https://www.signalintegrityjournal.com/",
    author: "Eric Bogatin",
    time: "2018 (第3版)",
    stars: 0
  },
  {
    type: "书籍",
    title: "《High Speed Digital Design: A Handbook of Black Magic》",
    desc: "Howard Johnson 著，高速数字电路设计领域必读经典。深入讲解传输线、串扰、时序与电源分配。",
    tags: ["book", "theory"],
    link: "#",
    author: "Howard Johnson, Martin Graham",
    time: "1993 (经典重印)",
    stars: 0
  },
  {
    type: "教程",
    title: "Phil's Lab — PCB 设计实战视频教程",
    desc: "YouTube 上高质量的 KiCad/Altium PCB 设计教程，覆盖 STM32/FPGA 实际项目从原理图到 Layout 全过程。",
    tags: ["tutorial", "pcb"],
    link: "https://www.youtube.com/@PhilsLab",
    author: "Phil's Lab",
    time: "持续更新",
    stars: 0
  },
  {
    type: "教程",
    title: "Robert Feranec — 高速 PCB 设计进阶",
    desc: "专注于高速数字与混合信号 PCB 设计，大量实操案例：DDR4/PCIe 布线、阻抗控制、EMC 设计。",
    tags: ["tutorial", "pcb", "theory"],
    link: "https://www.youtube.com/@RobertFeranec",
    author: "Robert Feranec",
    time: "持续更新",
    stars: 0
  },
];

const POSTS = [
  {
    channel: "schematic",
    author: "老周",
    avatar: "周",
    title: "LM358 构建的差分放大器 CMRR 实测只有 40dB，和仿真差了 20dB",
    excerpt: "用 LM358 搭了一个差分放大器测量电池内阻，LTSpice 仿真 CMRR 约 60dB，但实际 PCB 打样后实测不到 40dB。排查发现两个输入端走线长度差了 8mm，而且没有做 guard ring——请问这种量级的失配在低频（<10kHz）下影响这么大吗？",
    time: "4 小时前",
    upvotes: 18,
    replies: 11,
    tags: ["模拟电路", "差分放大器", "CMRR"]
  },
  {
    channel: "pcb",
    author: "Layout学徒",
    avatar: "徒",
    title: "4 层板叠层请教：SIG-GND-PWR-SIG 还是 SIG-GND-GND-SIG？",
    excerpt: "画一块 STM32H723 + DDR3L 的板子，速率 533MHz。JLCPCB 的 4 层 2313 叠层是 SIG(3.5mil prepreg)-GND(core 47mil)-PWR(prepreg 3.5mil)-SIG。DDR 走线在顶层，感觉参考平面隔着 47mil 太远了。要不要改成 SIG-GND-GND-SIG，把 DDR 尽量靠近参考层？",
    time: "6 小时前",
    upvotes: 27,
    replies: 19,
    tags: ["PCB", "叠层设计", "DDR3L", "阻抗控制"]
  },
  {
    channel: "showcase",
    author: "DigitalCraft",
    avatar: "DC",
    title: "[项目] 自制 100MHz 四通道逻辑分析仪 — 基于 Cypress FX2LP + sigrok",
    excerpt: "CY7C68013A + 74LVC245 缓冲，24MHz 晶振，支持 sigrok/PulseView 上位机。4 层板，USB 高速 480Mbps，KiCad 工程完全开源。附实测 100MHz 方波抓取效果。",
    time: "1 天前",
    upvotes: 156,
    replies: 43,
    tags: ["逻辑分析仪", "FX2LP", "sigrok", "开源"]
  },
  {
    channel: "sharing",
    author: "Datasheet猎人",
    avatar: "猎",
    title: "分享一个 TI 精密运放选型速查表（含 Vos/GBW/噪声/价格）",
    excerpt: "整理了 TI 在产 60+ 款精密运放的关键参数速查表：OPAx277、OPAx189、OPAx388、OPAx328 等。按 Vos 排序，标注了 GBW、en、SR、Iq、封装和 1k 批量价。附 Excel 下载链接。",
    time: "1 天前",
    upvotes: 89,
    replies: 12,
    tags: ["运放选型", "TI", "资源"]
  },
  {
    channel: "simulation",
    author: "SPICE玩家",
    avatar: "SP",
    title: "LTSpice 仿真 Buck 变换器环路稳定性：如何正确注入 AC 信号？",
    excerpt: "用 LTSpice 做 TPS5430 Buck 电路的波特图仿真，按照 Ridley 的中断注入法在反馈回路加 AC 源。但仿真结果相位裕度只有 15°，和实际测试的 55° 差距很大。是不是注入点的位置或阻抗设置有讲究？",
    time: "2 天前",
    upvotes: 34,
    replies: 18,
    tags: ["LTSpice", "Buck", "环路稳定性", "波特图"]
  },
  {
    channel: "schematic",
    author: "射频萌新",
    avatar: "射",
    title: "2.4GHz PCB 天线阻抗匹配 — 用网分测出来的 S11 和仿真差了 -8dB",
    excerpt: "参考 TI AN043 做的倒 F 天线，HFSS 仿真 S11 = -18dB @ 2.45GHz。实际打板后用 NanoVNA 测出来只有 -10dB。排查：板材是 FR-4（仿真用的 Rogers 4003 参数），εr 差异是不是主因？",
    time: "3 天前",
    upvotes: 22,
    replies: 16,
    tags: ["天线", "阻抗匹配", "FR4", "HFSS"]
  },
  {
    channel: "help",
    author: "转行硬件",
    avatar: "转",
    title: "PCB 打样回来发现 0402 电容焊盘间距太大，烙铁根本焊不上",
    excerpt: "第一次画 PCB，照着网上教程在 KiCad 里用了默认的 0402 封装。嘉立创打样回来发现焊盘之间间距比电容本身还宽——查了下才发现用的是 IPC 7351 Density Level A 的封装，应该用 Level C 的手焊封装。有没有推荐的 KiCad 手焊封装库？",
    time: "3 天前",
    upvotes: 45,
    replies: 28,
    tags: ["KiCad", "封装", "0402", "焊接"]
  },
  {
    channel: "showcase",
    author: "RetroTech",
    avatar: "RT",
    title: "[项目] 复刻 SEGA Genesis 游戏卡带 PCB — 支持现代 NOR Flash",
    excerpt: "逆向老卡带 PCB 后重新设计，用 SST39SF040 替代 Mask ROM，加 CPLD 做地址解码。4 层板，哑光黑阻焊 + 沉金，完全开源 KiCad 源文件 + Gerber。",
    time: "4 天前",
    upvotes: 278,
    replies: 67,
    tags: ["复古", "逆向工程", "SEGA", "开源硬件"]
  },
];

const PROJECTS = [
  {
    title: "KiCad 官方封装库",
    desc: "KiCad 开发团队维护的官方原理图符号库与 PCB 封装库，覆盖常用阻容感、连接器、IC 封装，GitHub 开源，持续更新。",
    tags: ["component-lib"],
    author: "KiCad 官方",
    stars: 0,
    contributors: 220
  },
  {
    title: "Open Components Library (OCL)",
    desc: "社区驱动的开源 EDA 元件库，支持 KiCad/Altium/Eagle 多格式导出，含 3D STEP 模型。所有元件经过 DRC 验证。",
    tags: ["component-lib"],
    author: "OCL 社区",
    stars: 0,
    contributors: 89
  },
  {
    title: "SparkFun Eagle 元件库",
    desc: "SparkFun 所有开源产品的 Eagle 封装库，包含数百个经过生产验证的封装，适合参考学习封装设计规范。",
    tags: ["component-lib"],
    author: "SparkFun Electronics",
    stars: 0,
    contributors: 45
  },
  {
    title: "openPMU — 开源相量测量单元",
    desc: "基于 STM32 的同步相量测量装置，符合 IEEE C37.118 标准。完整原理图 + PCB + 固件 DSP 算法开源。",
    tags: ["opensource", "instrument"],
    author: "openPMU 项目组",
    stars: 0,
    contributors: 12
  },
  {
    title: "LibreSolar BMS",
    desc: "开源的锂电池管理系统（BMS），支持 3-16 串锂电，含主动均衡、CAN 通信、ISO 26262 功能安全设计。",
    tags: ["opensource"],
    author: "LibreSolar",
    stars: 0,
    contributors: 23
  },
  {
    title: "OpenVentilator PCB",
    desc: "疫情期间社区协作的开源呼吸机控制板，基于 STM32F407，含压力传感器接口、步进电机驱动、报警电路。",
    tags: ["opensource"],
    author: "OpenVentilator 社区",
    stars: 0,
    contributors: 67
  },
];

function tagLabel(tag) {
  const map = {
    tutorial: "入门教程", simulation: "仿真工具", pcb: "PCB设计",
    opensource: "开源项目", book: "书籍推荐", theory: "理论入门",
    "component-lib": "元件库", tool: "工具", instrument: "仪器"
  };
  return map[tag] || tag;
}

function channelLabel(ch) {
  const map = {
    schematic: "电路图讨论", help: "新手求助", showcase: "项目展示",
    sharing: "资源分享", simulation: "仿真交流", pcb: "PCB设计"
  };
  return map[ch] || ch;
}
