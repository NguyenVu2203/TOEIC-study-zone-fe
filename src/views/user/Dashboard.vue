<template>
  <div class="dashboard-container">
    <!-- Welcome section -->
    <div class="welcome-section">
      <h2 class="greeting">Xin chào, {{ username }}!</h2>
      <div class="notification-banner">
        <i class="notification-icon"></i>
        <span
          >Bạn chưa tạo mục tiêu cho quá trình học tập của mình.
          <a href="#" class="action-link">Tạo ngay</a></span
        >
      </div>
    </div>

    <!-- Schedule section -->
    <div class="schedule-section">
      <h3 class="section-title">Lịch học hôm nay</h3>
      <p class="section-description">
        Bạn không có lịch học hôm nay. Vui lòng vào Lịch học của tôi để xem thêm
        hoặc tạo mới.
      </p>
    </div>

    <!-- My courses section -->
    <div class="my-courses-section">
      <h3 class="section-title">Khoá học của tôi</h3>
      <p class="section-description">Bạn chưa đăng ký khoá học nào!</p>
    </div>

    <!-- Banner section -->
    <div class="banner-section">
      <!-- Using placeholder instead of direct image reference -->
      <div class="level-test-banner">
        <div class="banner-content">
          <h3>Kiểm tra trình độ miễn phí</h3>
          <p>Nhanh chóng - Chính xác - Hiệu quả</p>
          <button class="start-button">START</button>
        </div>
      </div>
    </div>

    <!-- Featured courses section -->
    <div class="featured-courses-section">
      <h3 class="section-title">Khoá học online nổi bật</h3>
      <div class="courses-grid">
        <div class="course-card toeic">
          <div class="course-image toeic-image"></div>
          <div class="course-info">
            <h4 class="course-title">
              [Complete TOEIC] Chiến lược làm bài - Từ vựng - Ngữ pháp - Luyện
              nghe với Dictation
            </h4>
            <p class="course-subtitle">[Tặng khoá ITS Test]</p>
            <div class="rating">
              <span class="stars">★★★★★</span>
              <span class="reviews">(266) 36,802 học viên</span>
            </div>
            <div class="course-price">
              <span class="current-price">989,000đ</span>
              <span class="original-price">1,800,000đ</span>
              <span class="discount-tag">-45%</span>
            </div>
          </div>
        </div>

        <div class="course-card ielts-fundamentals">
          <div class="course-image ielts-fundamentals-image"></div>
          <div class="course-info">
            <h4 class="course-title">
              [IELTS Fundamentals] Từ vựng và ngữ pháp cơ bản IELTS
            </h4>
            <div class="rating">
              <span class="stars">★★★★★</span>
              <span class="reviews">(211) 16,553 học viên</span>
            </div>
            <div class="course-price">
              <span class="current-price">699,000đ</span>
              <span class="original-price">999,000đ</span>
              <span class="discount-tag">-30%</span>
            </div>
          </div>
        </div>

        <div class="course-card ielts-listening">
          <div class="course-image ielts-listening-image"></div>
          <div class="course-info">
            <h4 class="course-title">
              [IELTS Intensive Listening] Chiến lược làm bài - Chia đề - Luyện
              nghe IELTS Listening theo phương pháp Dictation
            </h4>
            <div class="rating">
              <span class="stars">★★★★★</span>
              <span class="reviews">(222) 30,506 học viên</span>
            </div>
            <div class="course-price">
              <span class="current-price">699,000đ</span>
              <span class="original-price">999,000đ</span>
              <span class="discount-tag">-30%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>

    <!-- Recent tests section -->
    <div class="recent-tests-section">
      <h3 class="section-title">Đề thi mới nhất</h3>
      <div class="tests-grid">
        <!-- Test cards - first row -->
        <div
          class="test-card"
          v-for="(test, index) in recentTests.slice(0, 4)"
          :key="`test-${index}`"
        >
          <div class="test-info">
            <h4 class="test-title">{{ test.title }}</h4>
            <p class="test-details">
              <span><i class="clock-icon"></i> {{ test.time }}</span>
              <span
                ><i class="question-icon"></i> {{ test.questions }} người đã làm
                thử</span
              >
            </p>
            <p class="test-attempts">
              <span><i class="user-icon"></i> {{ test.attempts }} </span>
            </p>
            <div class="test-tags">
              <span class="tag">{{ test.category }}</span>
              <span class="tag">{{ test.type }}</span>
            </div>
          </div>
          <button class="test-button">Chi tiết</button>
        </div>

        <!-- Test cards - second row -->
        <div
          class="test-card"
          v-for="(test, index) in recentTests.slice(4, 8)"
          :key="`test-${index + 4}`"
        >
          <div class="test-info">
            <h4 class="test-title">{{ test.title }}</h4>
            <p class="test-details">
              <span><i class="clock-icon"></i> {{ test.time }}</span>
              <span
                ><i class="question-icon"></i> {{ test.questions }} người đã làm
                thử</span
              >
            </p>
            <p class="test-attempts">
              <span><i class="user-icon"></i> {{ test.attempts }} </span>
            </p>
            <div class="test-tags">
              <span class="tag">{{ test.category }}</span>
              <span class="tag">{{ test.type }}</span>
            </div>
          </div>
          <button class="test-button">Chi tiết</button>
        </div>
      </div>
    </div>

    <!-- Promo banner -->
    <div class="promo-banner">
      <div class="promo-content">
        <h3 class="promo-title">LUYỆN ĐỀ ONLINE KHÔNG GIỚI HẠN</h3>
        <ul class="promo-features">
          <li>Kho đề phong phú: IELTS, TOEIC, HSK, TOPIK, THPT...</li>
          <li>Bảo điểm giống thi thật, đúng trình độ người dùng</li>
          <li>Tự động phát hiện điểm yếu theo điều cầu</li>
          <li>Hệ thống công cụ highlight, ghi chú, tải đề...</li>
          <li>Report đề thi ý nghĩa - Kiểm soát thời gian làm</li>
        </ul>
        <div class="promo-tag">
          <span class="discount">-30%</span>
        </div>
        <div class="promo-tag premium">
          <span>1 TỶ USER</span>
        </div>
      </div>
      <div class="promo-image"></div>
    </div>
    <div class="pagination-dots">
      <span class="dot active"></span>
      <span class="dot"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      username: "longvu2212203",
      recentTests: [
        {
          title: "IELTS Practice Set 3 Listening test 1",
          time: "40 phút",
          questions: "102228 | Có 283",
          attempts: "4 phần thi | 40 câu hỏi",
          category: "IELTS Academic",
          type: "Listening",
        },
        {
          title: "IELTS Practice Set 3 Listening test 2",
          time: "40 phút",
          questions: "34496 | Có 260",
          attempts: "4 phần thi | 40 câu hỏi",
          category: "IELTS Academic",
          type: "Listening",
        },
        {
          title: "IELTS Practice Set 3 Listening test 3",
          time: "40 phút",
          questions: "28415 | Có 256",
          attempts: "4 phần thi | 40 câu hỏi",
          category: "IELTS Academic",
          type: "Listening",
        },
        {
          title: "IELTS Practice Set 3 Listening test 4",
          time: "40 phút",
          questions: "27553 | Có 34",
          attempts: "4 phần thi | 40 câu hỏi",
          category: "IELTS Academic",
          type: "Listening",
        },
        {
          title: "IELTS Practice Set 3 Listening test 5",
          time: "40 phút",
          questions: "30111 | Có 76",
          attempts: "4 phần thi | 40 câu hỏi",
          category: "IELTS Academic",
          type: "Listening",
        },
        {
          title: "IELTS Practice Set 3 Listening test 6",
          time: "40 phút",
          questions: "28992 | Có 72",
          attempts: "4 phần thi | 40 câu hỏi",
          category: "IELTS Academic",
          type: "Listening",
        },
        {
          title: "IELTS Practice Set 3 Listening test 7",
          time: "40 phút",
          questions: "29343 | Có 59",
          attempts: "4 phần thi | 40 câu hỏi",
          category: "IELTS Academic",
          type: "Listening",
        },
        {
          title: "IELTS Practice Set 3 Listening test 8",
          time: "40 phút",
          questions: "28989 | Có 47",
          attempts: "4 phần thi | 40 câu hỏi",
          category: "IELTS Academic",
          type: "Listening",
        },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  padding: 24px;
  background-color: #f8f9fa;
  font-family: "Roboto", sans-serif;
}

.welcome-section {
  margin-bottom: 24px;
}

.greeting {
  font-size: 24px;
  font-weight: 500;
  color: #3a4a5e;
  margin-bottom: 16px;
}

.notification-banner {
  background-color: #fff3cd;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
}

.notification-icon {
  margin-right: 8px;
}

.action-link {
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
}

.section-title {
  font-size: 18px;
  font-weight: 500;
  color: #3a4a5e;
  margin-bottom: 12px;
}

.section-description {
  color: #6c757d;
  margin-bottom: 24px;
}

.schedule-section,
.my-courses-section {
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.banner-section {
  margin-bottom: 24px;
}

.level-test-banner {
  width: 100%;
  height: 180px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #4a90e2;
  background-image: linear-gradient(135deg, #4a90e2, #6c5ce7);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.banner-content {
  text-align: center;
  color: white;
}

.banner-content h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}

.start-button {
  background-color: white;
  color: #4a90e2;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  margin-top: 16px;
  cursor: pointer;
}

.featured-courses-section {
  margin-bottom: 32px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 16px;
}

.course-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.course-card:hover {
  transform: translateY(-5px);
}

.course-image {
  width: 100%;
  height: 160px;
  background-size: cover;
  background-position: center;
}

.toeic-image {
  background-color: #3498db;
  background-image: linear-gradient(45deg, #3498db, #1abc9c);
}

.ielts-fundamentals-image {
  background-color: #e74c3c;
  background-image: linear-gradient(45deg, #e74c3c, #f39c12);
}

.ielts-listening-image {
  background-color: #9b59b6;
  background-image: linear-gradient(45deg, #9b59b6, #8e44ad);
}

.course-info {
  padding: 16px;
}

.course-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.4;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.course-subtitle {
  color: #6c757d;
  font-size: 13px;
  margin-bottom: 8px;
}

.rating {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.stars {
  color: #ffc107;
  margin-right: 8px;
}

.reviews {
  font-size: 12px;
  color: #6c757d;
}

.course-price {
  display: flex;
  align-items: center;
}

.current-price {
  font-weight: 700;
  color: #e94560;
  margin-right: 8px;
}

.original-price {
  text-decoration: line-through;
  color: #6c757d;
  font-size: 12px;
  margin-right: 8px;
}

.discount-tag {
  background-color: #e94560;
  color: white;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.pagination-dots {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: #d1d9e6;
  border-radius: 50%;
  margin: 0 4px;
  cursor: pointer;
}

.dot.active {
  background-color: #0066cc;
}

.recent-tests-section {
  margin-bottom: 32px;
}

.tests-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 16px;
}

.test-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
}

.test-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.4;
}

.test-details,
.test-attempts {
  font-size: 12px;
  color: #6c757d;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.test-details span,
.test-attempts span {
  margin-right: 8px;
  display: flex;
  align-items: center;
}

/* Adding icons with CSS instead of using image files */
.clock-icon:before {
  content: "🕒";
  margin-right: 4px;
}

.question-icon:before {
  content: "❓";
  margin-right: 4px;
}

.user-icon:before {
  content: "👤";
  margin-right: 4px;
}

.test-tags {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.tag {
  background-color: #e6f7ff;
  color: #0066cc;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
}

.test-button {
  background-color: #fff;
  border: 1px solid #0066cc;
  color: #0066cc;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.test-button:hover {
  background-color: #0066cc;
  color: #fff;
}

.promo-banner {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 0;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  overflow: hidden;
  position: relative;
  height: 300px;
}

.promo-content {
  flex: 1;
  padding: 24px;
  position: relative;
  background: linear-gradient(135deg, #0a2647, #144272);
  color: white;
}

.promo-title {
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
}

.promo-features {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.promo-features li {
  font-size: 14px;
  color: #eaeaea;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.promo-features li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4cc9f0;
}

.promo-tag {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #e94560;
  color: white;
  padding: 8px 16px;
  border-radius: 50%;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}

.promo-tag.premium {
  background-color: #593dfb;
  right: 80px;
}

.promo-image {
  flex: 1;
  background-color: #f2f2f2;
  background-image: linear-gradient(45deg, #f2f2f2, #e6e6e6);
  position: relative;
}

/* Add a student silhouette */
.promo-image:after {
  content: "";
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 70%;
  height: 80%;
  background-color: #ccc;
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="30" r="20"/><path d="M30,70 Q50,100 70,70 L70,50 L30,50 Z"/></svg>');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}

@media (max-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tests-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }

  .tests-grid {
    grid-template-columns: 1fr;
  }

  .promo-banner {
    flex-direction: column;
    height: auto;
  }

  .promo-image {
    height: 200px;
  }
}
</style>
