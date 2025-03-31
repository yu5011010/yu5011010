// たいら土地家屋調査士事務所 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ハンバーガーメニューの制御
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // 報酬金額タブの制御
    const feeTabs = document.querySelectorAll('.fee-tab');
    const feeContents = document.querySelectorAll('.fee-tab-content');
    
    feeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            
            // タブのアクティブ状態を切り替え
            feeTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // コンテンツの表示を切り替え
            feeContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // 業務の流れタブの制御
    const flowTabs = document.querySelectorAll('.flow-tab');
    const flowContents = document.querySelectorAll('.flow-content');
    
    flowTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-flow') + '-flow';
            
            // タブのアクティブ状態を切り替え
            flowTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // コンテンツの表示を切り替え
            flowContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // よくある質問のアコーディオン
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // 現在のアイテムの状態を切り替え
            item.classList.toggle('active');
            
            // 他のアイテムを閉じる（オプション）
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //         otherItem.classList.remove('active');
            //     }
            // });
        });
    });
    
    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // モバイルメニューが開いている場合は閉じる
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
                
                // ヘッダーの高さを考慮してスクロール位置を調整
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ページトップへ戻るボタンの表示制御
    const pageTop = document.querySelector('.page-top');
    
    if (pageTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                pageTop.classList.add('visible');
            } else {
                pageTop.classList.remove('visible');
            }
        });
    }
    
    // フォームの送信処理（デモ用）
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 実際の送信処理はここに実装
            alert('お問い合わせありがとうございます。内容を確認の上、担当者より連絡いたします。');
            
            // フォームのリセット
            this.reset();
        });
    }
});

// 画像が読み込まれていない場合のフォールバック
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (!img.complete || img.naturalWidth === 0) {
            img.src = 'images/placeholder.jpg';
        }
    });
});
