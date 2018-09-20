```bash
git init
# 初始化目录/仓库

git add
# 增加索引

git commit -m "xiugai"
# 提交
```

```bash
git status
# 查看仓库状态

git diff
# 比对更改文件
```

```bash
git log
# 列出历史版本

git reset --hard HEAD~1
# 回退到上一个版本

git reset --hard 0e9c634
# 回退到指定版本

git reflog
# 查看git所有操作
```

```bash
git diff HEAD~1 -- readme.txt
# 查看当前工作区 与 仓库区里面的某一个确定的版本 的区别

git checkout -- readme.txt
# 撤销工作区某个文件 /也可以手动撤销

git reset HEAD readme.txt
# 撤销暂存区 /用仓库区里面的最新版本替换暂存区

# 工作区 没有git的时候的目录文件
# 暂存区
# 版本库 定死的commit改不了
# 创建文件 保存（工作区） -- add(暂存区)) --commit (版本库)
```

```bash
git rm test.txt
```
