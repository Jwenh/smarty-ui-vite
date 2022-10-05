# 待优化
1. 文档自定义组件，显示demo和代码切换
2. 引入组件库，进行二次封装
3. githubPage  和workflow 配置自动部署更新文档
4. 组件测试挂载库变更（改为@testing-library/vue，官方更推荐）
5. git仓库 分支保护
6. stylelint配置
7. 私服配置， changelog配置

# 已实现
1. vitepress 文档建设
2. 引入方式 组件库支持按需引入和全局引入（组件开发支持.vue和.tsx）
3. 原子类 css动态原子类配置， unocss配置
4. 单元测试 vitest+@vue/test-utils
5. 代码规范化（eslint+prettier）
6. commit格式化 （husky+commitlint+lint-staged）

# commit提交规范
type：commit 的类型；
feat：新功能、新特性；
fix: 修改 bug；
perf：更改代码，以提高性能；
refactor：代码重构（重构，在不影响代码内部行为、功能下的代码修改）；
docs：文档修改；
style：代码格式修改, 注意不是 css 修改（例如分号修改）；
test：测试用例新增、修改；
build：影响项目构建或依赖项修改；
revert：恢复上一次提交；
ci：持续集成相关文件修改；
chore：其他修改（不在上述类型中的修改）；
release：发布新版本；
workflow：工作流相关文件修改
## 示例1
fix(global):修复checkbox不能复选的问题
## 示例2 下面圆括号里的 common 为通用管理的名称
fix(common): 修复字体过小的BUG，将通用管理下所有页面的默认字体大小修改为 14px
## 示例3
fix: value.length -> values.length
# tip
1. 测试覆盖率：在代码编写阶段，建议只对重点功能进行测试，没必要一定追求过高的测试覆盖率


# 开发阶段
当前阶段把GitHub action关闭 （settings/Actions/Action Permission 设置为disabled）
image.png

# 目录结构
├── config               # 配置文件
├── coverage            # 覆盖率报告
├── demo                # 代码范例
├── docs                # 文档
├── node_modules  
├── scripts              # 脚本 发布、提交信息检查
├── src                  # 组件代码
└── types                # TS类型定义
# 组件结构规范
├── src                 # 组件代码
    └── button       # 组件包名
         ├── index.ts   # 组件入口
         ├── Button.tsx  # 组件代码  
         └── __tests__   # 测试用例
                  └── Button.spec.ts   
包名：小写 + 中划线；
统一入口文件： index.ts；
组件代码： 大驼峰；
测试用例代码 ： 测试对象名+ .spec.ts。

# 工具推荐
1.mrm（https://mrm.js.org/）
2. 资料库 （https://qiyoe.cn/code/front-end/lint/commitizen.html）
3. pnpm 文档 （https://www.pnpm.cn/configuring）

#规划
1.开发cli工具项目模板