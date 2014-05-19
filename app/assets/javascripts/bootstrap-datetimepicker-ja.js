




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>jquery.bootstrap-datetimepicker-ja/bootstrap-datetimepicker-ja.js at gh-pages · cyokodog/jquery.bootstrap-datetimepicker-ja · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="cyokodog/jquery.bootstrap-datetimepicker-ja" name="twitter:title" /><meta content="jquery.bootstrap-datetimepicker-ja - Bootstrap Datetime Picker を使いやすくカスタマイズした jQuery プラグイン" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/82461?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/82461?s=400" property="og:image" /><meta content="cyokodog/jquery.bootstrap-datetimepicker-ja" property="og:title" /><meta content="https://github.com/cyokodog/jquery.bootstrap-datetimepicker-ja" property="og:url" /><meta content="jquery.bootstrap-datetimepicker-ja - Bootstrap Datetime Picker を使いやすくカスタマイズした jQuery プラグイン" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="7748C2CB:522B:938AB08:5379B0BC" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="uNyffdP9fvQURIzQi6GShr156HU6DZmyIfNv4g8Yi3WePYgDxR/qtAqmrejl3rGu4fbq1eVOW3shnvOHMMbQTg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-da7475c114a3c2eab7b91a0584202a89fd188935.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-a49192fef33ef6e2053a634597427056eb62d634.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="e22dc102a1df9d45c9f2153cbc5fc5b0">

      
  <meta name="description" content="jquery.bootstrap-datetimepicker-ja - Bootstrap Datetime Picker を使いやすくカスタマイズした jQuery プラグイン" />

  <meta content="82461" name="octolytics-dimension-user_id" /><meta content="cyokodog" name="octolytics-dimension-user_login" /><meta content="12097206" name="octolytics-dimension-repository_id" /><meta content="cyokodog/jquery.bootstrap-datetimepicker-ja" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="12097206" name="octolytics-dimension-repository_network_root_id" /><meta content="cyokodog/jquery.bootstrap-datetimepicker-ja" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/cyokodog/jquery.bootstrap-datetimepicker-ja/commits/gh-pages.atom" rel="alternate" title="Recent Commits to jquery.bootstrap-datetimepicker-ja:gh-pages" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fcyokodog%2Fjquery.bootstrap-datetimepicker-ja%2Fblob%2Fgh-pages%2Fbootstrap-datetimepicker-ja.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="cyokodog/jquery.bootstrap-datetimepicker-ja"
      data-branch="gh-pages"
      data-sha="d86480d09c11b15faf203c764ec52684e00a90d0"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="cyokodog/jquery.bootstrap-datetimepicker-ja" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fcyokodog%2Fjquery.bootstrap-datetimepicker-ja"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/cyokodog/jquery.bootstrap-datetimepicker-ja/stargazers">
      2
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fcyokodog%2Fjquery.bootstrap-datetimepicker-ja"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/network" class="social-count">
        3
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/cyokodog" class="url fn" itemprop="url" rel="author"><span itemprop="title">cyokodog</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/cyokodog/jquery.bootstrap-datetimepicker-ja" class="js-current-repository js-repo-home-link">jquery.bootstrap-datetimepicker-ja</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /cyokodog/jquery.bootstrap-datetimepicker-ja">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /cyokodog/jquery.bootstrap-datetimepicker-ja/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /cyokodog/jquery.bootstrap-datetimepicker-ja/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /cyokodog/jquery.bootstrap-datetimepicker-ja/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /cyokodog/jquery.bootstrap-datetimepicker-ja/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /cyokodog/jquery.bootstrap-datetimepicker-ja/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/cyokodog/jquery.bootstrap-datetimepicker-ja.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/cyokodog/jquery.bootstrap-datetimepicker-ja.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/cyokodog/jquery.bootstrap-datetimepicker-ja" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/cyokodog/jquery.bootstrap-datetimepicker-ja" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save cyokodog/jquery.bootstrap-datetimepicker-ja to your computer and use it in GitHub Desktop." aria-label="Save cyokodog/jquery.bootstrap-datetimepicker-ja to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/archive/gh-pages.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download cyokodog/jquery.bootstrap-datetimepicker-ja as a zip file"
                   title="Download cyokodog/jquery.bootstrap-datetimepicker-ja as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/blob/5afa68551ee6b6aefc399d87e93615c25cc3d4db/bootstrap-datetimepicker-ja.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:476960858a2a1b7f0ac24040074d97a7 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/find/gh-pages" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="gh-pages"
    data-ref="gh-pages"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">gh-pages</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/blob/gh-pages/bootstrap-datetimepicker-ja.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/cyokodog/jquery.bootstrap-datetimepicker-ja" data-branch="gh-pages" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery.bootstrap-datetimepicker-ja</span></a></span></span><span class="separator"> / </span><strong class="final-path">bootstrap-datetimepicker-ja.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="bootstrap-datetimepicker-ja.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="cyokodog" class="main-avatar js-avatar" data-user="82461" height="24" src="https://avatars2.githubusercontent.com/u/82461?s=140" width="24" />
      <span class="author"><a href="/cyokodog" rel="author">cyokodog</a></span>
      <time datetime="2013-08-14T10:36:13+09:00" is="relative-time" title-format="%Y-%m-%d %H:%M:%S %z" title="2013-08-14 10:36:13 +0900">August 14, 2013</time>
      <div class="commit-title">
          <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/commit/68b242f4b05ac0bb76e6e11235e31c8864106b0a" class="message" data-pjax="true" title="add files">add files</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="cyokodog" class=" js-avatar" data-user="82461" height="24" src="https://avatars2.githubusercontent.com/u/82461?s=140" width="24" />
            <a href="/cyokodog">cyokodog</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>82 lines (78 sloc)</span>
          <span class="meta-divider"></span>
        <span>2.417 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/raw/gh-pages/bootstrap-datetimepicker-ja.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/blame/gh-pages/bootstrap-datetimepicker-ja.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/cyokodog/jquery.bootstrap-datetimepicker-ja/commits/gh-pages/bootstrap-datetimepicker-ja.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">){</span></div><div class='line' id='LC2'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">datetimepicker</span><span class="p">.</span><span class="nx">dates</span> <span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC3'>		<span class="nx">ja</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC4'>			<span class="nx">days</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;日曜日&#39;</span><span class="p">,</span> <span class="s1">&#39;月曜日&#39;</span><span class="p">,</span> <span class="s1">&#39;火曜日&#39;</span><span class="p">,</span> <span class="s1">&#39;水曜日&#39;</span><span class="p">,</span> <span class="s1">&#39;木曜日&#39;</span><span class="p">,</span> <span class="s1">&#39;金曜日&#39;</span><span class="p">,</span> <span class="s1">&#39;土曜日&#39;</span><span class="p">,</span> <span class="s1">&#39;日曜日&#39;</span><span class="p">],</span></div><div class='line' id='LC5'>			<span class="nx">daysShort</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;日&#39;</span><span class="p">,</span> <span class="s1">&#39;月&#39;</span><span class="p">,</span> <span class="s1">&#39;火&#39;</span><span class="p">,</span> <span class="s1">&#39;水&#39;</span><span class="p">,</span> <span class="s1">&#39;木&#39;</span><span class="p">,</span> <span class="s1">&#39;金&#39;</span><span class="p">,</span> <span class="s1">&#39;土&#39;</span><span class="p">,</span> <span class="s1">&#39;日&#39;</span><span class="p">],</span></div><div class='line' id='LC6'>			<span class="nx">daysMin</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;日&#39;</span><span class="p">,</span> <span class="s1">&#39;月&#39;</span><span class="p">,</span> <span class="s1">&#39;火&#39;</span><span class="p">,</span> <span class="s1">&#39;水&#39;</span><span class="p">,</span> <span class="s1">&#39;木&#39;</span><span class="p">,</span> <span class="s1">&#39;金&#39;</span><span class="p">,</span> <span class="s1">&#39;土&#39;</span><span class="p">,</span> <span class="s1">&#39;日&#39;</span><span class="p">],</span></div><div class='line' id='LC7'>			<span class="nx">months</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;1月&#39;</span><span class="p">,</span> <span class="s1">&#39;2月&#39;</span><span class="p">,</span> <span class="s1">&#39;3月&#39;</span><span class="p">,</span> <span class="s1">&#39;4月&#39;</span><span class="p">,</span> <span class="s1">&#39;5月&#39;</span><span class="p">,</span> <span class="s1">&#39;6月&#39;</span><span class="p">,</span><span class="s1">&#39;7月&#39;</span><span class="p">,</span> <span class="s1">&#39;8月&#39;</span><span class="p">,</span> <span class="s1">&#39;9月&#39;</span><span class="p">,</span> <span class="s1">&#39;10月&#39;</span><span class="p">,</span> <span class="s1">&#39;11月&#39;</span><span class="p">,</span> <span class="s1">&#39;12月&#39;</span><span class="p">],</span></div><div class='line' id='LC8'>			<span class="nx">monthsShort</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;1月&#39;</span><span class="p">,</span> <span class="s1">&#39;2月&#39;</span><span class="p">,</span> <span class="s1">&#39;3月&#39;</span><span class="p">,</span> <span class="s1">&#39;4月&#39;</span><span class="p">,</span> <span class="s1">&#39;5月&#39;</span><span class="p">,</span> <span class="s1">&#39;6月&#39;</span><span class="p">,</span><span class="s1">&#39;7月&#39;</span><span class="p">,</span> <span class="s1">&#39;8月&#39;</span><span class="p">,</span> <span class="s1">&#39;9月&#39;</span><span class="p">,</span> <span class="s1">&#39;10月&#39;</span><span class="p">,</span> <span class="s1">&#39;11月&#39;</span><span class="p">,</span> <span class="s1">&#39;12月&#39;</span><span class="p">]</span></div><div class='line' id='LC9'>		<span class="p">}</span></div><div class='line' id='LC10'>	<span class="p">});</span></div><div class='line' id='LC11'>	<span class="kd">var</span> <span class="nx">plugin</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">datetimepicker_ja</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">option</span><span class="p">){</span></div><div class='line' id='LC12'>		<span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC13'>			<span class="kd">var</span> <span class="nx">target</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC14'>			<span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">option</span><span class="p">);</span></div><div class='line' id='LC15'>			<span class="kd">var</span> <span class="nx">api</span> <span class="o">=</span> <span class="nx">target</span><span class="p">.</span><span class="nx">datetimepicker</span><span class="p">(</span><span class="nx">c</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;datetimepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC16'>			<span class="o">!</span><span class="nx">c</span><span class="p">.</span><span class="nx">datePickerAutoClose</span> <span class="o">||</span> <span class="nx">api</span><span class="p">.</span><span class="nx">pickTime</span> <span class="o">||</span> <span class="nx">api</span><span class="p">.</span><span class="nx">widget</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span><span class="s1">&#39;td.day&#39;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC17'>				<span class="nx">api</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC18'>			<span class="p">});</span></div><div class='line' id='LC19'>			<span class="o">!</span><span class="nx">c</span><span class="p">.</span><span class="nx">hideSeconds</span> <span class="o">||</span> <span class="nx">api</span><span class="p">.</span><span class="nx">widget</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.timepicker-picker tr&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC20'>				<span class="kd">var</span> <span class="nx">td</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;td&#39;</span><span class="p">);</span></div><div class='line' id='LC21'>				<span class="nx">td</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="mi">3</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC22'>				<span class="nx">td</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="mi">4</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC23'>			<span class="p">});</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'>		<span class="p">});</span></div><div class='line' id='LC26'>	<span class="p">}</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>	<span class="kd">function</span> <span class="nx">padLeft</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span> <span class="nx">l</span><span class="p">,</span> <span class="nx">c</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC29'>		<span class="k">if</span> <span class="p">(</span><span class="nx">l</span> <span class="o">&lt;</span> <span class="nx">s</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="nx">s</span><span class="p">;</span></div><div class='line' id='LC30'>		<span class="k">else</span> <span class="k">return</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">l</span> <span class="o">-</span> <span class="nx">s</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">1</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="nx">c</span> <span class="o">||</span> <span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">s</span><span class="p">;</span></div><div class='line' id='LC31'>	<span class="p">}</span></div><div class='line' id='LC32'>	<span class="kd">var</span> <span class="nx">proto</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">datetimepicker</span><span class="p">.</span><span class="nx">Constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC33'>	<span class="kd">var</span> <span class="nx">prop</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC34'>	<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="k">in</span> <span class="nx">proto</span><span class="p">){</span></div><div class='line' id='LC35'>		<span class="nx">prop</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">proto</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC36'>	<span class="p">}</span></div><div class='line' id='LC37'>	<span class="nx">proto</span><span class="p">.</span><span class="nx">init</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">options</span><span class="p">){</span></div><div class='line' id='LC38'>		<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC39'>		<span class="nx">prop</span><span class="p">[</span><span class="s1">&#39;init&#39;</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC40'>	<span class="p">}</span></div><div class='line' id='LC41'>	<span class="nx">proto</span><span class="p">.</span><span class="nx">fillMinutes</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC42'>		<span class="kd">var</span> <span class="nx">minutesX</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">minutesX</span><span class="p">;</span></div><div class='line' id='LC43'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">minutesX</span><span class="p">){</span></div><div class='line' id='LC44'>			<span class="nx">prop</span><span class="p">[</span><span class="s1">&#39;fillMinutes&#39;</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC45'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC46'>		<span class="p">}</span></div><div class='line' id='LC47'>		<span class="kd">var</span> <span class="nx">minutesRange</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">minutesRange</span><span class="p">;</span></div><div class='line' id='LC48'>		<span class="kd">var</span> <span class="nx">hour</span> <span class="o">=</span> <span class="mi">60</span><span class="p">;</span></div><div class='line' id='LC49'>		<span class="kd">var</span> <span class="nx">minutesCol</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">((</span><span class="nx">hour</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="nx">minutesRange</span><span class="p">);</span></div><div class='line' id='LC50'>		<span class="kd">var</span> <span class="nx">minutesY</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">minutesCol</span> <span class="o">/</span> <span class="nx">minutesX</span><span class="p">);</span></div><div class='line' id='LC51'>		<span class="kd">var</span> <span class="nx">table</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">widget</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.timepicker .timepicker-minutes table&#39;</span><span class="p">);</span></div><div class='line' id='LC52'>		<span class="nx">table</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC53'>		<span class="kd">var</span> <span class="nx">html</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC54'>		<span class="kd">var</span> <span class="nx">current</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC55'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">minutesY</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC56'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;tr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC57'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">minutesX</span><span class="p">;</span> <span class="nx">j</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>				<span class="k">if</span><span class="p">(</span><span class="nx">current</span> <span class="o">&lt;</span> <span class="nx">hour</span><span class="p">){</span></div><div class='line' id='LC59'>					<span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">current</span><span class="p">.</span><span class="nx">toString</span><span class="p">();</span></div><div class='line' id='LC60'>					<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;td class=&quot;minute&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">padLeft</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="s1">&#39;0&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&lt;/td&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC61'>				<span class="p">}</span></div><div class='line' id='LC62'>				<span class="k">else</span><span class="p">{</span></div><div class='line' id='LC63'>					<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;td/&gt;&#39;</span></div><div class='line' id='LC64'>				<span class="p">}</span></div><div class='line' id='LC65'>				<span class="nx">current</span> <span class="o">+=</span> <span class="nx">minutesRange</span><span class="p">;</span></div><div class='line' id='LC66'>			<span class="p">}</span></div><div class='line' id='LC67'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/tr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC68'>		<span class="p">}</span></div><div class='line' id='LC69'>		<span class="nx">table</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">html</span><span class="p">);</span></div><div class='line' id='LC70'>	<span class="p">}</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">datetimepicker_ja</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC73'>		<span class="nx">format</span> <span class="o">:</span> <span class="s1">&#39;yyyy/MM/dd&#39;</span><span class="p">,</span></div><div class='line' id='LC74'>		<span class="nx">pickTime</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC75'>		<span class="nx">language</span> <span class="o">:</span> <span class="s1">&#39;ja&#39;</span><span class="p">,</span></div><div class='line' id='LC76'>		<span class="nx">datePickerAutoClose</span> <span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC77'>		<span class="nx">hideSeconds</span> <span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC78'>		<span class="nx">minutesX</span> <span class="o">:</span> <span class="mi">4</span><span class="p">,</span></div><div class='line' id='LC79'>		<span class="nx">minutesRange</span> <span class="o">:</span> <span class="mi">5</span></div><div class='line' id='LC80'>	<span class="p">}</span></div><div class='line' id='LC81'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03114s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-ab437d541e9c517df422126b73a5694a1d43ee9e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f8fc00b8934006933bc2391fd76f435ac85a7016.js" type="text/javascript"></script>
      
      
  </body>
</html>

