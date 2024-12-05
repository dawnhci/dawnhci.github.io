---
layout: default
permalink: /
---

{% include landing.html %}


<br>

<!-- NEWS
<h3 style="padding: 0 20px;">
  <a href="/news">News</a>
</h3>
<div id="newsContent" style="max-width: 1200px; margin: 0 auto; padding: 0 40px;">
    <ul style="list-style-type: none; padding-left: 0;">
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line1">
            <div class="news-line" onclick="toggleDescription('desc1')" style="cursor: pointer;">
                <span>10 October 2024 news accepted international conference paper!</span>
                <i class="fas fa-angle-down" id="icon1" style="cursor: pointer;"></i>
            </div>
            <div id="desc1" class="description" style="display: none; margin-left: 20px;">
                * description for 10 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line2">
            <div class="news-line" onclick="toggleDescription('desc2')" style="cursor: pointer;">
                <span>11 October 2024 news accepted international conference paper!</span>
                <i class="fas fa-angle-down" id="icon2" style="cursor: pointer;"></i>
            </div>
            <div id="desc2" class="description" style="display: none; margin-left: 20px;">
                * description for 11 October 2024 news
            </div>
        </li>
        <li class="news-item" style="line-height: 1.5;">
            <hr id="line3">
            <div class="news-line" onclick="toggleDescription('desc3')" style="cursor: pointer;">
                <span>12 October 2024 news accepted international conference paper!</span>
                <i class="fas fa-angle-down" id="icon3" style="cursor: pointer;"></i>
            </div>
            <div id="desc3" class="description" style="display: none; margin-left: 20px;">
                * description for 12 October 2024 news
            </div>
        </li>
    </ul>
</div>

<style>
    .news-line {
        display: flex;
        justify-content: space-between; /* 텍스트와 아이콘을 좌우로 배치 */
        align-items: center;
        width: 100%;
    }
    .news-line span {
        flex: 1; /* 텍스트가 아이콘을 밀어내지 않도록 유연하게 사용 */
    }
</style>

<script>
    function toggleDescription(descId) {
        var description = document.getElementById(descId);
        var icon = document.getElementById('icon' + descId.slice(-1)); // 아이콘을 id로 찾음

        if (description.style.display === "none") {
            description.style.display = "block";
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-angle-up');
        } else {
            description.style.display = "none";
            icon.classList.remove('fa-angle-up');
            icon.classList.add('fa-angle-down');
        }
    }
</script>
<br>  -->