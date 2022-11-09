import{_ as n,o as s,c as a,a as t}from"./app.2872013a.js";const e={},o=t(`<h2 id="path-autocomplete" tabindex="-1"><a class="header-anchor" href="#path-autocomplete" aria-hidden="true">#</a> path Autocomplete</h2><p><code>@</code> 路径导入</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 配置 @ 的路径提示</span>
<span class="token property">&quot;path-autocomplete.pathMappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${folder}/src&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// 导入文件是否携带文件扩展名</span>
<span class="token property">&quot;path-autocomplete.extensionOnImport&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eslint-和-prettier" tabindex="-1"><a class="header-anchor" href="#eslint-和-prettier" aria-hidden="true">#</a> ESLint 和 Prettier</h2><p>在 <code>C:\\Users\\你的用户名</code> 路径下创建 <code>.prettierrc</code> 文件，里面写上</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接着在 <code>settings.json</code> 文件配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;source.fixAll&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;eslint.alwaysShowStatus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token comment">// 配置prettier</span>
<span class="token property">&quot;prettier.configPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Users\\\\???\\\\.prettierrc&quot;</span><span class="token punctuation">,</span>
<span class="token comment">// 对象或数组最后一个元素后面是否逗号</span>
<span class="token property">&quot;prettier.trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
<span class="token comment">// 句尾是否分号</span>
<span class="token property">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token comment">// 每行文字个数超出此限制将会被迫换行</span>
<span class="token property">&quot;prettier.printWidth&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
<span class="token comment">// 使用单引号替换双引号</span>
<span class="token property">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token comment">// (x) =&gt; {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号</span>
<span class="token property">&quot;prettier.arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span>
<span class="token comment">// 设置 .vue 文件中，HTML代码的格式化插件</span>
<span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js-beautify-html&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;vetur.ignoreProjectWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token property">&quot;vetur.format.defaultFormatterOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;js-beautify-html&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;wrap_attributes&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prettyhtml&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
        <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[o];function l(r,c){return s(),a("div",null,p)}const u=n(e,[["render",l],["__file","vscode.html.vue"]]);export{u as default};
