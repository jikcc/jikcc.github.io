---
layout: mypost
title: Switch模拟器-Ryubing (Ryujinx) 龙神模拟器使用教程小白都能学会 附固件 KEYS 和游戏  
categories: [Switch,模拟器]
---

### **Ryujinx（龙神模拟器）使用教程**

![Ryujinx](https://s2.loli.net/2025/10/29/LpNo9Mmb3zPcXOS.png)

### **第一部分：准备工作与安装**

在开始之前，你需要准备好以下文件和工具：

1.  **Ryujinx 模拟器本体**：
    *   **下载**：[https://pan.quark.cn/s/861f3958dfc5](https://pan.quark.cn/s/861f3958dfc5)
    *    switch模拟器合集含龙神模拟器 内附系统固件和KEYS和驱动

2.  **Switch 系统固件**：
    *   你需要从你自己的 Switch 主机中提取，或者从正规渠道获取。
    *   文件通常是一个 `.zip` 压缩包，里面包含许多 `.nca` 文件。

3.  **Prod.keys 密钥文件**：
    *   这是解密和运行游戏所必需的密钥文件，同样需要从你自己的 Switch 主机中提取。
    *   文件名为 `prod.keys`。

4.  **游戏文件**：
    *   **XCI 文件**：游戏卡带的转储格式。
    *   **NSP 文件**：eShop 数字版游戏或更新/DLC 的格式。
    *   switch游戏2000多个+电脑安卓的模拟器+金手指
https://www.kdocs.cn/l/ceguk4acZn29



#### **安装步骤**

1.  **解压 Ryujinx**：
    *   将下载的 Ryujinx 压缩包解压到一个你方便找到的文件夹，例如 `D:\Ryujinx`。这是一个便携式软件，无需安装，直接运行 `Ryujinx.exe` 即可。

2.  **首次运行**：
    *   首次运行会弹出设置向导，如果错过了，主界面也很容易找到这些设置。

---

### **第二部分：核心设置**

首次运行后，我们需要配置密钥和固件。

#### **1. 安装密钥和固件**

*   **安装固件**：
    *   打开 Ryujinx，点击顶部菜单栏的 `Tools` -> `Install Firmware` -> `Install a firmware from XCI or ZIP`。
    *   选择你准备好的固件 `.zip` 文件，等待安装完成。

*   **安装密钥**：
    *   点击 `File` -> `Open Ryujinx Folder`，这会打开 Ryujinx 的数据文件夹。
    *   进入 `system` 文件夹，将你准备好的 `prod.keys` 文件放入其中。
    *   **重启 Ryujinx** 以使密钥生效。

#### **2. 配置基础设置**

点击 `Options` -> `Settings` 打开设置面板。

*   **General 通用**：
    *   **Check Updates on Startup**：启动时检查更新，建议开启。
    *   **Show Console Window**：显示控制台窗口，用于查看错误日志，调试时有用。

*   **Input 输入**：
    *   这里是配置手柄的地方。
    *   在 `Input Device` 下拉菜单中选择你的手柄（如 Xbox 控制器、PS4/5 控制器等）。
    *   点击 `Configure` 来映射按键。Ryujinx 对手柄的支持很好，通常能自动识别。你也可以使用键盘模拟手柄。

*   **Graphics 图形**：
    *   **Graphics Backend**：图形后端。
        *   **OpenGL**：兼容性更好，适合大多数用户。
        *   **Vulkan**：性能通常更高，尤其对 AMD 显卡和部分新游戏有奇效，但可能存在图形错误。如果 OpenGL 运行不畅，可以尝试切换到此选项。
    *   **Enable Shader Cache**：**必须开启**。首次编译着色器时会卡顿，缓存后再次运行同一场景会非常流畅。
    *   **Enable Texture Recompression**：开启纹理压缩，可以减少显存占用，如果显卡显存较小（<6GB），建议开启。
    *   **Resolution Scale**：分辨率缩放。默认 1x 是 Switch 原生分辨率（1080p/720p）。你可以调高（如 2x， 3x， 4x）来获得更清晰的画面，但对硬件要求也更高。
    *   **Aspect Ratio**：画面比例，通常保持默认的 `16:9` 即可。

*   **System 系统**：
    *   **Region**：地区，根据你的游戏设置，通常影响商店和语言，对大部分游戏本身影响不大。
    *   **Time Zone**：时区，可以设置为 `Beijing Standard Time`。
    *   **Language**：系统语言，设置为 `Chinese` 或 `Simplified Chinese`，这样支持中文的游戏会自动显示中文。

*   **CPU 和 Memory**：
    *   通常保持默认即可。`Memory Manager Mode` 建议使用 `Host (fastest)`。

设置完成后点击 `Save` 保存。

---

### **第三部分：添加与管理游戏**

#### **1. 添加游戏目录**

Ryujinx 不会自动扫描你电脑上的所有文件，你需要告诉它游戏存放在哪个文件夹。

1.  点击 `Options` -> `Settings` -> `General` 标签页。
2.  在 `Game Directories` 下方，点击 `Add`。
3.  选择你存放 `.xci` 或 `.nsp` 游戏文件的文件夹。
4.  点击 `Save`。

添加后，主界面的游戏列表就会显示这些游戏。

#### **2. 安装更新和 DLC**

如果你的游戏有更新补丁（Update）或追加内容（DLC），它们通常是 `.nsp` 格式。

1.  在主界面右键点击游戏图标。
2.  选择 `Manage DLC` 或 `Manage Updates`。
3.  在弹出的窗口中点击 `Add`，然后选择对应的 `.nsp` 文件。
4.  确保勾选了新添加的内容，点击 `Save`。

**注意**：更新和 DLC 需要与游戏本体版本匹配，并且需要相应的密钥。

---

### **第四部分：运行游戏与常见问题**

#### **运行游戏**

在游戏列表中双击你想运行的游戏图标即可。首次运行会花一些时间编译着色器，可能会感到卡顿，这是正常现象。

#### **常见问题与解决方法**

1.  **游戏无法启动，提示 “Missing Key” 或 “Unable to decrypt”**
    *   **原因**：你的 `prod.keys` 文件太旧，不包含该游戏所需的密钥。
    *   **解决**：更新你的 `prod.keys` 文件到与你的固件版本匹配或更新的版本。

2.  **游戏运行速度慢、卡顿**
    *   **原因**：着色器编译或电脑配置不足。
    *   **解决**：
        *   确保 `Enable Shader Cache` 已开启。初次卡顿是正常的，玩一会儿就会好转。
        *   在图形设置中尝试切换 `Vulkan` 后端。
        *   适当降低 `Resolution Scale`。
        *   确认你的电脑配置（尤其是CPU和GPU）是否达到要求。

3.  **游戏画面出现贴图错误、闪烁或黑屏**
    *   **原因**：通常是图形后端的兼容性问题。
    *   **解决**：
        *   在 `Graphics` 设置中，在 `OpenGL` 和 `Vulkan` 之间切换。
        *   尝试关闭 `Enable Texture Recompression`。
        *   访问 Ryujinx 的 [游戏兼容性列表](https://github.com/Ryujinx/Ryujinx-Games-List/issues) 查看特定游戏的解决方案。

4.  **手柄/控制器不识别**
    *   **解决**：
        *   在 `Input` 设置中，确认 `Input Device` 选择了正确的手柄。
        *   点击 `Configure` 检查按键映射是否正确。
        *   确保你的手柄在电脑上被正确识别（可以在其他游戏或系统设置里测试）。

5.  **如何获得更好的性能？**
    *   使用 **Vulkan** 后端（如果兼容）。
    *   更新你的显卡驱动程序到最新版本。
    *   在 NVIDIA 控制面板/AMD 软件中，为 Ryujinx.exe 设置高性能模式。
    

### **总结**

使用 Ryujinx 的流程可以概括为：

**下载模拟器 → 安装密钥和固件 → 配置手柄和图形设置 → 添加游戏目录 → 安装更新/DLC → 开始游戏**

![Ryujinx](https://s2.loli.net/2025/10/29/jX4qF8ucCEwshYb.png)

