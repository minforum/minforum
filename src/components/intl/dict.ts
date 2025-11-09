const dict = [
  {
    en: 'Light',
    es: 'Ligera',
    fr: 'Lumière',
    de: 'Licht',
    cn: '亮',
    ja: 'ライト',
    ru: 'Светлая',
    ko: '빛'
  },
  {
    en: 'Dark',
    es: 'Oscuro',
    fr: 'Sombre',
    de: 'Dunkel',
    cn: '暗',
    ja: 'ダーク',
    ru: 'Темная',
    ko: '어둠'
  },
  {
    en: 'Search....',
    es: 'Buscar....',
    fr: 'Chercher....',
    de: 'Suchen....',
    cn: '搜索...',
    ja: '検索....',
    ru: 'Поиск....',
    ko: '검색....'
  },
  {
    en: 'Search discussion, user, email.....',
    es: 'Búsqueda discusión, correo electrónico del usuario .....',
    fr: 'Rechercher la discussion par e-mail utilisateur ..... ',
    de: 'Suche nach Diskussionen, Benutzern, E-Mails.....',
    cn: '搜索讨论、用户、电子邮件...',
    ja: 'ディスカッション、ユーザー、メールで検索....',
    ru: 'Поиск дискуссии, пользователя, электронной почты.....',
    ko: '토론, 사용자, 이메일 검색.....'
  },
  {
    en: 'Profile updated successfully',
    es: 'Perfil actualizado con éxito',
    fr: 'Mise à jour du profil réussie',
    de: 'Profil erfolgreich aktualisiert',
    cn: '个人资料更新成功',
    ja: 'プロフィールが正常に更新されました',
    ru: 'Профиль успешно обновлен',
    ko: '프로필이 성공적으로 업데이트되었습니다.'
  },
  {
    en: 'Unable to update profile. Please try again.',
    es: 'No se puede actualizar el perfil. Inténtalo de nuevo.',
    fr: 'Impossible de mettre à jour le profil. Veuillez réessayer.',
    de: 'Profil kann nicht aktualisiert werden. Bitte versuchen Sie es erneut.',
    cn: '无法更新个人资料，请重试。',
    ja: 'プロフィールを更新できませんでした。もう一度お試しください。',
    ru: 'Не удалось обновить профиль. Пожалуйста, попробуйте еще раз.',
    ko: '프로필을 업데이트할 수 없습니다. 다시 시도해주세요.'
  },
  {
    en: 'Profile',
    es: 'Perfil',
    fr: 'Profil ',
    de: 'Profil',
    cn: '个人资料',
    ja: 'プロフィール',
    ru: 'Профиль',
    ko: '프로필'
  },
  {
    en: 'Date joined',
    es: 'Fecha de Registro',
    fr: "Date d'adhésion",
    de: 'Beitrittsdatum',
    cn: '加入日期',
    ja: '参加日',
    ru: 'Дата регистрации',
    ko: '가입 날짜'
  },
  {
    en: 'Admin',
    es: 'Administración',
    fr: 'Administrateur',
    de: 'Administrator',
    cn: '管理员',
    ja: '管理者',
    ru: 'Администратор',
    ko: '관리자'
  },
  {
    en: 'Log out',
    es: 'Cerrar sesión',
    fr: 'Se déconnecter',
    de: 'Abmelden',
    cn: '退出登录',
    ja: 'ログアウト',
    ru: 'Выйти',
    ko: '로그아웃'
  },
  {
    en: 'Start a discussion',
    es: 'Iniciar una discusión',
    fr: 'Ouvrir une discussion',
    de: 'Diskussion starten',
    cn: '开始讨论',
    ja: 'ディスカッションを始める',
    ru: 'Начать дискуссию',
    ko: '토론 시작하기'
  },
  {
    en: 'Discussion',
    es: 'Discusión',
    fr: 'Discussion',
    de: 'Diskussion',
    cn: '讨论',
    ja: 'ディスカッション',
    ru: 'Дискуссия',
    ko: '토론'
  },
  {
    en: 'Discussions',
    es: 'Asunto',
    fr: 'Discussions',
    de: 'Diskussionen',
    cn: '讨论',
    ja: 'ディスカッション',
    ru: 'Дискуссии',
    ko: '토론들'
  },
  {
    en: 'Members',
    es: 'Miembros',
    fr: 'Membres',
    de: 'Mitglieder',
    cn: '成员',
    ja: 'メンバー',
    ru: 'Участники',
    ko: '회원들'
  },
  {
    en: 'Member',
    es: 'Miembro',
    fr: 'Membre',
    de: 'Mitglied',
    cn: '成员',
    ja: 'メンバー',
    ru: 'Участник',
    ko: '회원'
  },
  {
    en: 'member',
    es: 'Miembro',
    fr: 'Membre',
    de: 'Mitglied',
    cn: '成员',
    ja: 'メンバー',
    ru: 'участник',
    ko: '회원'
  },
  {
    en: 'comment',
    es: 'comentario',
    fr: 'commentaire',
    de: 'Kommentar',
    cn: '评论',
    ja: 'コメント',
    ru: 'комментарий',
    ko: '댓글'
  },
  {
    en: 'comments',
    es: 'comentarios',
    fr: 'les commentaires',
    de: 'Kommentare',
    cn: '评论',
    ja: 'コメント',
    ru: 'комментарии',
    ko: '댓글들'
  },
  {
    en: 'Comment',
    es: 'Comentario',
    fr: 'Commentaire',
    de: 'Kommentar',
    cn: '评论',
    ja: 'コメント',
    ru: 'Комментарий',
    ko: '댓글'
  },
  {
    en: 'Comments',
    es: 'Comentarios',
    fr: 'Les commentaires',
    de: 'Kommentare',
    cn: '评论',
    ja: 'コメント',
    ru: 'Комментарии',
    ko: '댓글들'
  },
  {
    en: 'reply',
    es: 'respuesta',
    fr: 'réponse',
    de: 'Antwort',
    cn: '回复',
    ja: 'リプライ',
    ru: 'ответ',
    ko: '답글'
  },
  {
    en: 'replies',
    es: 'respuestas',
    fr: 'Réponses',
    de: 'Antworten',
    cn: '回复',
    ja: 'リプライ',
    ru: 'ответы',
    ko: '답글들'
  },
  {
    en: 'Reply',
    es: 'Respuesta',
    fr: 'Réponse',
    de: 'Antwort',
    cn: '回复',
    ja: 'リプライ',
    ru: 'Ответ',
    ko: '답글'
  },
  {
    en: 'Replies',
    es: 'Respuestas',
    fr: 'Réponses',
    de: 'Antworten',
    cn: '回复',
    ja: 'リプライ',
    ru: 'Ответы',
    ko: '답글들'
  },
  {
    en: 'like',
    es: 'gustar',
    fr: 'comme',
    de: 'Gefällt mir',
    cn: '喜欢',
    ja: 'いいね',
    ru: 'нравится',
    ko: '좋아요'
  },
  {
    en: 'liked',
    es: 'gustó',
    fr: 'aimé',
    de: 'Gefällt mir',
    cn: '已喜欢',
    ja: 'いいね',
    ru: 'понравилось',
    ko: '좋아요 받은 수'
  },
  {
    en: 'moderator',
    es: 'moderador',
    fr: 'modérateur',
    de: 'Moderator',
    cn: '版主',
    ja: 'モデレーター',
    ru: 'модератор',
    ko: '운영자'
  },
  {
    en: 'moderators',
    es: 'moderadores',
    fr: 'modérateurs',
    de: 'Moderatoren',
    cn: '版主',
    ja: 'モデレーター',
    ru: 'модераторы',
    ko: '운영자들'
  },
  {
    en: 'Moderator',
    es: 'Moderador',
    fr: 'Modérateur',
    de: 'Moderator',
    cn: '版主',
    ja: 'モデレーター',
    ru: 'Модератор',
    ko: '운영자'
  },
  {
    en: 'Moderators',
    es: 'Moderadores',
    fr: 'Modérateurs',
    de: 'Moderatoren',
    cn: '版主',
    ja: 'モデレーター',
    ru: 'Модераторы',
    ko: '운영자들'
  },
  {
    en: 'Loading',
    es: 'Cargando',
    fr: 'Chargement',
    de: 'Laden',
    cn: '加载中',
    ja: 'ロード中',
    ru: 'Загрузка',
    ko: '로딩 중'
  },
  {
    en: 'Settings',
    es: 'Ajustes',
    fr: 'Réglages',
    de: 'Einstellungen',
    cn: '设置',
    ja: '設定',
    ru: 'Настройки',
    ko: '설정'
  },
  {
    en: 'Top Contributors',
    es: 'Principales contribuyentes',
    fr: 'Meilleurs contributeurs',
    de: 'Top-Beiträger',
    cn: '顶级贡献者',
    ja: 'トップの貢献者',
    ru: 'Топовые участники',
    ko: '최고 기여자들'
  },
  {
    en: 'Recommend Discussions',
    es: 'Recomendar discusiones',
    fr: 'Recommander des discussions ',
    de: 'Empfohlene Diskussionen',
    cn: '推荐讨论',
    ja: 'お勧めのディスカッション',
    ru: 'Рекомендуемые дискуссии',
    ko: '추천 토론들'
  },
  {
    en: 'Share',
    es: 'Compartir',
    fr: 'Partager',
    de: 'Teilen',
    cn: '分享',
    ja: '共有',
    ru: 'Поделиться',
    ko: '공유'
  },
  {
    en: 'Email',
    es: 'Correo electrónico',
    fr: 'E-mail ',
    de: 'E-Mail',
    cn: '电子邮件',
    ja: 'メール',
    ru: 'Электронная почта',
    ko: '이메일'
  },
  {
    en: 'Report',
    es: 'Reporte',
    fr: 'Signaler',
    de: 'Melden',
    cn: '举报',
    ja: '報告する',
    ru: 'Пожаловаться',
    ko: '신고'
  },
  {
    en: 'Reports',
    es: 'Informes',
    fr: 'Rapports',
    de: 'Meldungen',
    cn: '举报',
    ja: '報告',
    ru: 'Жалобы',
    ko: '신고들'
  },
  {
    en: 'Edit discussion',
    es: 'Editar discusión',
    fr: 'Modifier la discussion',
    de: 'Diskussion bearbeiten',
    cn: '编辑讨论',
    ja: 'ディスカッションを編集',
    ru: 'Редактировать дискуссию',
    ko: '토론 수정'
  },
  {
    en: 'Category',
    es: 'Categoría',
    fr: 'Catégorie',
    de: 'Kategorie',
    cn: '分类',
    ja: 'カテゴリ',
    ru: 'Категория',
    ko: '카테고리'
  },
  {
    en: 'Categories',
    es: 'Categorías',
    fr: 'Catégories',
    de: 'Kategorien',
    cn: '分类',
    ja: 'カテゴリ',
    ru: 'Категории',
    ko: '카테고리들'
  },
  {
    en: 'Reply',
    es: 'Respuesta',
    fr: 'Réponse',
    de: 'Antwort',
    cn: '回复',
    ja: 'リプライ',
    ru: 'Ответ',
    ko: '답글'
  },
  {
    en: 'Replies',
    es: 'respuestas',
    fr: 'réponses',
    de: 'Antworten',
    cn: '回复',
    ja: 'リプライ',
    ru: 'Ответы',
    ko: '답글들'
  },
  {
    en: 'Click on the number count to who see liked.',
    es: 'Haga clic en el recuento de números a los que les gustó.',
    fr: 'Cliquez sur le nombre de compter à qui voir aimé.',
    de: 'Klicken Sie auf die Anzahl, um zu sehen, wer es gemocht hat.',
    cn: '点击数字查看谁点赞。',
    ja: 'いいねしたユーザーを見るには数字をクリックしてください',
    ru: 'Нажмите на число, чтобы увидеть, кто лайкнул.',
    ko: '좋아요를 본 사람 수를 보려면 숫자를 클릭하세요.'
  },
  {
    en: 'Inappropiate content',
    es: 'Contenido inapropiado',
    fr: 'Contenu inapproprié ',
    de: 'Unangemessener Inhalt',
    cn: '不当内容',
    ja: '不適切な内容',
    ru: 'Неприемлемый контент',
    ko: '부적절한 내용'
  },
  {
    en: 'Fraud or Spam',
    es: 'Fraude o Spam',
    fr: 'Fraude ou spam',
    de: 'Betrug oder Spam',
    cn: '欺诈或垃圾信息',
    ja: '詐欺またはスパム',
    ru: 'Мошенничество или спам',
    ko: '사기 또는 스팸'
  },
  {
    en: 'False information',
    es: 'Información falsa',
    fr: 'Fausse information',
    de: 'Falsche Informationen',
    cn: '虚假信息',
    ja: '虚偽の情報',
    ru: 'Ложная информация',
    ko: '거짓 정보'
  },
  {
    en: 'Nudity',
    es: 'Desnudez',
    fr: 'Nudité',
    de: 'Nacktheit',
    cn: '裸露',
    ja: 'ヌード',
    ru: 'Нагота',
    ko: '노출'
  },
  {
    en: 'Hate speech',
    es: 'El discurso del odio',
    fr: 'Discours de haine ',
    de: 'Hassrede',
    cn: '仇恨言论',
    ja: '憎悪的な発言',
    ru: 'Речь ненависти',
    ko: '혐오 발언'
  },
  {
    en: 'Violence',
    es: 'Violencia',
    fr: 'La violence',
    de: 'Gewalt',
    cn: '暴力',
    ja: '暴力',
    ru: 'Насилие',
    ko: '폭력'
  },
  {
    en: 'Harassment',
    es: 'Acoso',
    fr: 'Harcèlement',
    de: 'Belästigung',
    cn: '骚扰',
    ja: '嫌がらせ',
    ru: 'Харассмент',
    ko: '학대'
  },
  {
    en: 'Terrorism',
    es: 'Terrorismo',
    fr: 'Terrorisme',
    de: 'Terrorismus',
    cn: '恐怖主义',
    ja: 'テロリズム',
    ru: 'Терроризм',
    ko: '테러'
  },
  {
    en: 'Suicide or self injury',
    es: 'Suicidio o autolesión',
    fr: 'Suicide ou automutilation',
    de: 'Suizid oder Selbstverletzung',
    cn: '自杀或自残',
    ja: '自殺または自傷行為',
    ru: 'Самоубийство или самоповреждение',
    ko: '자살 또는 자해'
  },
  {
    en: 'Child abuse',
    es: 'Abuso infantil',
    fr: 'Abus sur mineur',
    de: 'Kindesmissbrauch',
    cn: '虐待儿童',
    ja: '児童虐待',
    ru: 'Детское насилие',
    ko: '아동 학대'
  },
  {
    en: 'point',
    es: 'punto',
    fr: 'point',
    de: 'Punkt',
    cn: '积分',
    ja: 'ポイント',
    ru: 'балл',
    ko: '포인트'
  },
  {
    en: 'points',
    es: 'puntos',
    fr: 'points',
    de: 'Punkte',
    cn: '积分',
    ja: 'ポイント',
    ru: 'баллы',
    ko: '포인트'
  },
  {
    en: 'Discussion Title',
    es: 'Título de la discusión',
    fr: 'Titre de discussion',
    de: 'Diskussionstitel',
    cn: '讨论标题',
    ja: 'ディスカッションタイトル',
    ru: 'Заголовок дискуссии',
    ko: '토론 제목'
  },
  {
    en: 'Choose a Category',
    es: 'Elige una categoría',
    fr: 'Choisissez une catégorie',
    de: 'Wählen Sie eine Kategorie',
    cn: '选择分类',
    ja: 'カテゴリを選択',
    ru: 'Выберите категорию',
    ko: '카테고리 선택'
  },
  {
    en: 'Type here...',
    es: 'Escriba aquí...',
    fr: 'Écrivez ici...',
    de: 'Hier eingeben...',
    cn: '在这里输入...',
    ja: 'ここに入力...',
    ru: 'Печатайте здесь...',
    ko: '여기에 입력하세요...'
  },
  {
    en: 'Type something memorable....',
    es: 'Escriba algo memorable....',
    fr: 'Tapez quelque chose de mémorable....',
    de: 'Etwas Unvergessliches eingeben...',
    cn: '输入一些值得记住的内容...',
    ja: '印象に残る何かを入力してください...',
    ru: 'Введите что-то запоминающееся...',
    ko: '기억에 남는 내용을 입력하세요...'
  },
  {
    en: 'Publish',
    es: 'Publicar',
    fr: 'Publier',
    de: 'Veröffentlichen',
    cn: '发布',
    ja: '公開',
    ru: 'Опубликовать',
    ko: '게시'
  },
  {
    en: 'Sign in',
    es: 'Iniciar sesión',
    fr: "S'identifier",
    de: 'Anmelden',
    cn: '登录',
    ja: 'サインイン',
    ru: 'Войти',
    ko: '로그인'
  },
  {
    en: 'Mark all read',
    es: 'Marcar todo como leido',
    fr: 'Marquer tout comme lu',
    de: 'Alle als gelesen markieren',
    cn: '全部标记为已读',
    ja: '全て既読にする',
    ru: 'Отметить все как прочитанное',
    ko: '모두 읽음 표시'
  },
  {
    en: 'No notification',
    es: 'Sin notificación',
    fr: 'Aucune notification',
    de: 'Keine Benachrichtigungen',
    cn: '无通知',
    ja: '通知なし',
    ru: 'Нет уведомлений',
    ko: '알림 없음'
  },
  {
    en: 'Sign in to publish',
    es: 'Inicia sesión para publicar',
    fr: 'Connectez-vous pour publier',
    de: 'Anmelden, um zu veröffentlichen',
    cn: '登录以发布',
    ja: '公開するにはサインインしてください',
    ru: 'Войдите, чтобы опубликовать',
    ko: '게시하려면 로그인하세요'
  },
  {
    en: 'Type something memorable...',
    es: 'Escriba algo memorable...',
    fr: 'Tapez quelque chose de mémorable...',
    de: 'Etwas Unvergessliches eingeben...',
    cn: '输入一些值得记住的内容...',
    ja: '印象に残る何かを入力してください...',
    ru: 'Введите что-то запоминающееся...',
    ko: '기억에 남는 내용을 입력하세요...'
  },
  {
    en: 'Please select a language',
    es: 'Por favor, seleccione un idioma',
    fr: 'Veuillez sélectionner une langue',
    de: 'Bitte wählen Sie eine Sprache',
    cn: '请选择语言',
    ja: '言語を選択してください',
    ru: 'Пожалуйста, выберите язык',
    ko: '언어를 선택하세요'
  },
  {
    en: 'Popular',
    es: 'Popular',
    fr: 'Populaire',
    de: 'Beliebt',
    cn: '热门',
    ja: '人気',
    ru: 'Популярные',
    ko: '인기'
  },
  {
    en: 'Recent',
    es: 'Reciente',
    fr: 'Récent',
    de: 'Aktuell',
    cn: '最近',
    ja: '最近',
    ru: 'Недавние',
    ko: '최근'
  },
  {
    en: 'Unanswered',
    es: 'Sin respuesta',
    fr: 'Sans réponse',
    de: 'Unbeantwortet',
    cn: '未解答',
    ja: '未解決',
    ru: 'Без ответа',
    ko: '미답변'
  },
  {
    en: 'Joined',
    es: 'Unido',
    fr: 'Rejoint',
    de: 'Beigetreten',
    cn: '加入',
    ja: '参加した',
    ru: 'Присоединился',
    ko: '가입일'
  },
  {
    en: 'Go to Discussions',
    es: 'Ir a Discusiones',
    fr: 'Aller aux Discussions',
    de: 'Zu Diskussionen gehen',
    cn: '前往讨论',
    ja: 'ディスカッションに移動',
    ru: 'Перейти к дискуссиям',
    ko: '토론으로 이동'
  },
  {
    en: 'Unable to update status! Please try again later.',
    es: '¡No se puede actualizar el estado! Por favor, inténtelo de nuevo más tarde.',
    fr: 'Impossible de mettre à jour le statut ! Veuillez réessayer plus tard.',
    de: 'Aktualisierung des Status nicht möglich! Bitte versuchen Sie es später erneut.',
    cn: '无法更新状态！请稍后再试。',
    ja: 'ステータスを更新できませんでした！後でもう一度お試しください。',
    ru: 'Не удалось обновить статус! Пожалуйста, повторите попытку позже.',
    ko: '상태 업데이트를 할 수 없습니다! 나중에 다시 시도하세요.'
  },
  {
    en: 'Discussion status updated',
    es: 'Estado de discusión actualizado',
    fr: 'Statut de la discussion mis à jour',
    de: 'Diskussionsstatus aktualisiert',
    cn: '讨论状态已更新',
    ja: 'ディスカッションステータスが更新されました',
    ru: 'Статус дискуссии обновлен',
    ko: '토론 상태가 업데이트되었습니다'
  },
  {
    en: 'No Discussion',
    es: 'Sin discusión',
    fr: 'Pas de discussion',
    de: 'Keine Diskussionen',
    cn: '无讨论',
    ja: 'ディスカッションがありません',
    ru: 'Нет дискуссий',
    ko: '토론 없음'
  },
  {
    en: 'Notification',
    es: 'Notificación',
    fr: 'Notification',
    de: 'Benachrichtigung',
    cn: '通知',
    ja: '通知',
    ru: 'Уведомление',
    ko: '알림'
  },
  {
    en: 'Notifications',
    es: 'Notificaciones',
    fr: 'Avis',
    de: 'Benachrichtigungen',
    cn: '通知',
    ja: '通知',
    ru: 'Уведомления',
    ko: '알림들'
  },
  {
    en: 'Mark All Read',
    es: 'Marcar todo leer',
    fr: 'Marquer tous lire',
    de: 'Alle als gelesen markieren',
    cn: '全部标记为已读',
    ja: '全て既読にする',
    ru: 'Отметить все как прочитанное',
    ko: '모두 읽음 표시'
  },
  {
    en: 'Cancel',
    es: 'Cancelar',
    fr: 'Annuler',
    de: 'Abbrechen',
    cn: '取消',
    ja: 'キャンセル',
    ru: 'Отменить',
    ko: '취소'
  },
  {
    en: 'Yes, Delete',
    es: 'Sí, Eliminar',
    fr: 'Oui, supprimer',
    de: 'Ja, Löschen',
    cn: '是的，删除',
    ja: 'はい、削除',
    ru: 'Да, удалить',
    ko: '예, 삭제'
  },
  {
    en: 'Delete discussion',
    es: 'Eliminar discusión',
    fr: 'Supprimer la discussion',
    de: 'Diskussion löschen',
    cn: '删除讨论',
    ja: 'ディスカッションを削除',
    ru: 'Удалить дискуссию',
    ko: '토론 삭제'
  },
  {
    en: 'Are you sure you want to delete?',
    es: '¿Estás seguro de que quieres eliminar?',
    fr: 'Etes-vous sûr que vous voulez supprimer?',
    de: 'Sind Sie sicher, dass Sie löschen möchten?',
    cn: '确定要删除吗？',
    ja: '削除してもよろしいですか？',
    ru: 'Вы уверены, что хотите удалить?',
    ko: '정말로 삭제하시겠습니까?'
  },
  {
    en: 'Oops! Page not found or has been deleted.',
    es: '¡Ups! Página no encontrada o eliminada.',
    fr: 'Oh là là! Page introuvable ou supprimée.',
    de: 'Ups! Seite nicht gefunden oder wurde gelöscht.',
    cn: '哎呀！页面未找到或已被删除。',
    ja: 'おっと！ページが見つかりませんでしたまたは削除されました。',
    ru: 'Ой! Страница не найдена или была удалена.',
    ko: '이런! 페이지를 찾을 수 없거나 삭제되었습니다.'
  },
  {
    en: 'Back to home',
    es: 'Vuelve a casa',
    fr: "Retour à l'accueil",
    de: 'Zurück zur Startseite',
    cn: '返回首页',
    ja: 'ホームに戻る',
    ru: 'Вернуться на главную',
    ko: '홈으로 돌아가기'
  },
  {
    en: 'Page not found',
    es: 'Página no encontrada',
    fr: 'Page non trouvée',
    de: 'Seite nicht gefunden',
    cn: '页面未找到',
    ja: 'ページが見つかりません',
    ru: 'Страница не найдена',
    ko: '페이지를 찾을 수 없음'
  },
  {
    en: 'Account verified successfully! Please sign in to continue.',
    es: '¡Cuenta verificada con éxito! Por favor inicie sesión para continuar.',
    fr: 'Compte vérifié avec succès ! Veuillez vous connecter pour continuer.',
    de: 'Konto erfolgreich verifiziert! Bitte melden Sie sich an, um fortzufahren.',
    cn: '帐号验证成功！请登录以继续。',
    ja: 'アカウントが正常に確認されました！続行するにはサインインしてください。',
    ru: 'Аккаунт успешно подтвержден! Пожалуйста, войдите, чтобы продолжить.',
    ko: '계정이 성공적으로 인증되었습니다! 계속하려면 로그인하세요.'
  },
  {
    en: 'Account settings',
    es: 'Configuraciones de la cuenta',
    fr: 'Paramètres du compte',
    de: 'Kontoeinstellungen',
    cn: '帐号设置',
    ja: 'アカウント設定',
    ru: 'Настройки аккаунта',
    ko: '계정 설정'
  },
  {
    en: 'In reply to [] comment',
    es: 'En respuesta al comentario de []',
    fr: 'En réponse au commentaire []',
    de: 'Als Antwort auf [] Kommentar',
    cn: '回复[]评论',
    ja: '[]のコメントに返信中',
    ru: 'В ответ на [] комментарий',
    ko: '[] 댓글에 대한 답글'
  },
  {
    en: 'Send reply',
    es: 'Enviar respuesta',
    fr: 'Envoyer une réponse',
    de: 'Antwort senden',
    cn: '发送回复',
    ja: '返信を送信',
    ru: 'Отправить ответ',
    ko: '답글 보내기'
  },
  {
    en: 'User',
    es: 'Usuario',
    fr: 'Utilisateur',
    de: 'Benutzer',
    cn: '用户',
    ja: 'ユーザー',
    ru: 'Пользователь',
    ko: '사용자'
  },
  {
    en: 'Pageviews',
    es: 'Visitas a páginas',
    fr: 'Avis de page ',
    de: 'Seitenaufrufe',
    cn: '页面浏览量',
    ja: 'ページビュー',
    ru: 'Просмотры страницы',
    ko: '페이지뷰'
  },
  {
    en: 'Dashboard',
    es: 'Salpicadero',
    fr: 'Tableau de bord ',
    de: 'Dashboard',
    cn: '仪表盘',
    ja: 'ダッシュボード',
    ru: 'Панель управления',
    ko: '대시보드'
  },
  {
    en: 'Name',
    es: 'Nombre',
    fr: 'Nom',
    de: 'Name',
    cn: '名称',
    ja: '名前',
    ru: 'Имя',
    ko: '이름'
  },
  {
    en: 'Date',
    es: 'Fecha',
    fr: 'Date',
    de: 'Datum',
    cn: '日期',
    ja: '日付',
    ru: 'Дата',
    ko: '날짜'
  },
  {
    en: 'Role',
    es: 'Papel',
    fr: 'Rôle ',
    de: 'Rolle',
    cn: '角色',
    ja: '役割',
    ru: 'Роль',
    ko: '역할'
  },
  {
    en: 'Actions',
    es: 'Acción',
    fr: 'Action ',
    de: 'Aktionen',
    cn: '操作',
    ja: 'アクション',
    ru: 'Действия',
    ko: '동작들'
  },
  {
    en: 'Action',
    es: 'Comportamiento',
    fr: 'Actes',
    de: 'Aktion',
    cn: '操作',
    ja: 'アクション',
    ru: 'Действие',
    ko: '동작'
  },
  {
    en: 'Edit',
    es: 'Editar',
    fr: 'Modifier ',
    de: 'Bearbeiten',
    cn: '编辑',
    ja: '編集',
    ru: 'Редактировать',
    ko: '편집'
  },
  {
    en: 'View',
    es: 'Ver',
    fr: 'Vue',
    de: 'Anzeigen',
    cn: '查看',
    ja: '表示',
    ru: 'Просмотр',
    ko: '보기'
  },
  {
    en: 'Username',
    es: 'Nombre de usuario',
    fr: "Nom de l'utilisateur ",
    de: 'Benutzername',
    cn: '用户名',
    ja: 'ユーザー名',
    ru: 'Имя пользователя',
    ko: '사용자 이름'
  },
  {
    en: 'Status',
    es: 'Estado',
    fr: 'Statut',
    de: 'Status',
    cn: '状态',
    ja: 'ステータス',
    ru: 'Статус',
    ko: '상태'
  },
  {
    en: 'Active',
    es: 'Activo',
    fr: 'Actif',
    de: 'Aktiv',
    cn: '活跃',
    ja: 'アクティブ',
    ru: 'Активный',
    ko: '활성화됨'
  },
  {
    en: 'Banned',
    es: 'Prohibido',
    fr: 'Banni',
    de: 'Gesperrt',
    cn: '已封禁',
    ja: '禁止',
    ru: 'Заблокирован',
    ko: '금지됨'
  },
  {
    en: 'Users',
    es: 'Usuarios',
    fr: 'Désactivée ',
    de: 'Benutzer',
    cn: '用户',
    ja: 'ユーザー',
    ru: 'Пользователи',
    ko: '사용자들'
  },
  {
    en: 'Disabled',
    es: 'Discapacitado',
    fr: 'Fermer',
    de: 'Deaktiviert',
    cn: '已禁用',
    ja: '無効',
    ru: 'Отключен',
    ko: '비활성화됨'
  },
  {
    en: 'Close',
    es: 'Cambiar estado',
    fr: 'Utilisateurs',
    de: 'Schließen',
    cn: '关闭',
    ja: '閉じる',
    ru: 'Закрыть',
    ko: '닫기'
  },
  {
    en: 'Member since',
    es: 'Miembro desde',
    fr: 'Membre depuis',
    de: 'Mitglied seit',
    cn: '会员自',
    ja: '登録日',
    ru: 'Участник с',
    ko: '가입일'
  },
  {
    en: 'Change details',
    es: 'Cambiar detalles',
    fr: 'Modifier les détails',
    de: 'Details ändern',
    cn: '更改详细信息',
    ja: '詳細を変更',
    ru: 'Изменить данные',
    ko: '상세정보 변경'
  },
  {
    en: 'Change password',
    es: 'Cambiar la contraseña',
    fr: 'Changer le mot de passe',
    de: 'Passwort ändern',
    cn: '更改密码',
    ja: 'パスワードを変更',
    ru: 'Изменить пароль',
    ko: '비밀번호 변경'
  },
  {
    en: 'Type current password to update changes',
    es: 'Escriba la contraseña actual para actualizar los cambios',
    fr: 'Tapez le mot de passe actuel pour mettre à jour les modifications',
    de: 'Aktuelle Passwort eingeben, um Änderungen zu aktualisieren',
    cn: '输入当前密码以更新更改',
    ja: '変更を更新するには現在のパスワードを入力してください',
    ru: 'Введите текущий пароль для обновления изменений',
    ko: '변경 사항을 업데이트하려면 현재 비밀번호를 입력하세요'
  },
  {
    en: 'Type new password',
    es: 'Escribe una nueva contraseña',
    fr: 'Tapez le nouveau mot de passe',
    de: 'Neues Passwort eingeben',
    cn: '输入新密码',
    ja: '新しいパスワードを入力してください',
    ru: 'Введите новый пароль',
    ko: '새로운 비밀번호 입력'
  },
  {
    en: 'Upload photo',
    es: 'Subir foto',
    fr: 'Envoyer la photo',
    de: 'Foto hochladen',
    cn: '上传照片',
    ja: '写真をアップロード',
    ru: 'Загрузить фото',
    ko: '사진 업로드'
  },
  {
    en: 'Change status',
    es: 'Cambiar estado',
    fr: 'Changer de statut',
    de: 'Status ändern',
    cn: '更改状态',
    ja: 'ステータスを変更',
    ru: 'Изменить статус',
    ko: '상태 변경'
  },
  {
    en: 'Change role',
    es: 'Cambiar el papel',
    fr: 'Changer de rôle',
    de: 'Rolle ändern',
    cn: '更改角色',
    ja: '役割を変更',
    ru: 'Изменить роль',
    ko: '역할 변경'
  },
  {
    en: 'Title',
    es: 'Título',
    fr: 'Titre',
    de: 'Titel',
    cn: '标题',
    ja: 'タイトル',
    ru: 'Заголовок',
    ko: '제목'
  },
  {
    en: 'Answered',
    es: 'Respondi',
    fr: 'Répondu',
    de: 'Beantwortet',
    cn: '已回答',
    ja: '回答済み',
    ru: 'Отвечен',
    ko: '답변됨'
  },
  {
    en: 'Administrator',
    es: 'Administrador',
    fr: 'Administrateur',
    de: 'Administrator',
    cn: '管理员',
    ja: '管理者',
    ru: 'Администратор',
    ko: '관리자'
  },
  {
    en: 'admin',
    es: 'administrador',
    fr: 'administrateur',
    de: 'admin',
    cn: '管理员',
    ja: '管理者',
    ru: 'админ',
    ko: '관리자'
  },
  {
    en: 'Type',
    es: 'Tipo',
    fr: 'Taper',
    de: 'Typ',
    cn: '类型',
    ja: 'タイプ',
    ru: 'Тип',
    ko: '종류'
  },
  {
    en: 'Color',
    es: 'Color',
    fr: 'Couleur',
    de: 'Farbe',
    cn: '颜色',
    ja: '色',
    ru: 'Цвет',
    ko: '색상'
  },
  {
    en: 'Add',
    es: 'Añadir',
    fr: 'Ajouter',
    de: 'Hinzufügen',
    cn: '添加',
    ja: '追加',
    ru: 'Добавить',
    ko: '추가'
  },
  {
    en: 'Description is required',
    es: 'Se requiere descripción',
    fr: 'La description est obligatoire',
    de: 'Beschreibung ist erforderlich',
    cn: '描述是必需的',
    ja: '説明が必要です',
    ru: 'Требуется описание',
    ko: '설명이 필요합니다'
  },
  {
    en: 'Category created successfully!',
    es: '¡Categoría creada con éxito!',
    fr: 'Catégorie créée avec succès !',
    de: 'Kategorie erfolgreich erstellt!',
    cn: '分类创建成功！',
    ja: 'カテゴリが正常に作成されました！',
    ru: 'Категория успешно создана!',
    ko: '카테고리가 성공적으로 생성되었습니다!'
  },
  {
    en: 'Unable to create category. Please try again!',
    es: 'No se puede crear la categoría. ¡Inténtalo de nuevo!',
    fr: 'Impossible de créer la catégorie. Veuillez réessayer!',
    de: 'Kategorie konnte nicht erstellt werden. Bitte versuchen Sie es erneut!',
    cn: '无法创建分类。请重试！',
    ja: 'カテゴリを作成できませんでした。後でもう一度お試しください！',
    ru: 'Не удалось создать категорию. Пожалуйста, повторите попытку!',
    ko: '카테고리를 생성할 수 없습니다. 다시 시도하세요!'
  },
  {
    en: 'Comment is blank!',
    es: '¡El comentario está en blanco!',
    fr: 'Le commentaire est vide !',
    de: 'Kommentar ist leer!',
    cn: '评论空白',
    ja: 'コメントは空白です！',
    ru: 'Комментарий пуст!',
    ko: '댓글이 비어 있습니다!'
  },
  {
    en: 'Unable to save reply.',
    es: 'No se puede guardar la respuesta.',
    fr: "Impossible d'enregistrer la réponse.",
    de: 'Antwort kann nicht gespeichert werden.',
    cn: '无法保存回复。',
    ja: '返信を保存できません。',
    ru: 'Не удалось сохранить ответ.',
    ko: '답장을 저장할 수 없습니다.'
  },
  {
    en: 'Unable to save comment.',
    es: 'No se puede guardar el comentario.',
    fr: "Impossible d'enregistrer le commentaire.",
    de: 'Kommentar kann nicht gespeichert werden.',
    cn: '无法保存评论。',
    ja: 'コメントを保存できません。',
    ru: 'Не удалось сохранить комментарий.',
    ko: '댓글을 저장할 수 없습니다.'
  },
  {
    en: 'Edit category',
    es: 'Editar categoria',
    fr: 'Modifier la catégorie',
    de: 'Kategorie bearbeiten',
    cn: '编辑分类',
    ja: 'カテゴリの編集',
    ru: 'Редактировать категорию',
    ko: '카테고리 편집'
  },
  {
    en: 'Category updated successfully',
    es: 'Categoría actualizada con éxito',
    fr: 'Catégorie mise à jour avec succès',
    de: 'Kategorie erfolgreich aktualisiert',
    cn: '分类更新成功',
    ja: 'カテゴリが正常に更新されました',
    ru: 'Категория успешно обновлена!',
    ko: '카테고리가 성공적으로 업데이트되었습니다'
  },
  {
    en: 'Unable to update category. Please try again!',
    es: 'No se puede actualizar la categoría. ¡Inténtalo de nuevo!',
    fr: 'Impossible de mettre à jour la catégorie. Veuillez réessayer!',
    de: 'Kategorie konnte nicht aktualisiert werden. Bitte versuchen Sie es erneut!',
    cn: '无法更新分类。请重试！',
    ja: 'カテゴリを更新できませんでした。後でもう一度お試しください！',
    ru: 'Не удалось обновить категорию. Пожалуйста, повторите попытку!',
    ko: '카테고리를 업데이트할 수 없습니다. 다시 시도하세요!'
  },
  {
    en: 'yes',
    es: 'sí',
    fr: 'oui',
    de: 'ja',
    cn: '是',
    ja: 'はい',
    ru: 'да',
    ko: '예'
  },
  {
    en: 'no',
    es: 'no',
    fr: 'non',
    de: 'nein',
    cn: '否',
    ja: 'いいえ',
    ru: 'нет',
    ko: '아니오'
  },
  {
    en: 'Apply filter',
    es: 'Aplicar filtro',
    fr: 'Appliquer le filtre',
    de: 'Filter anwenden',
    cn: '应用过滤器',
    ja: 'フィルターを適用する',
    ru: 'Применить фильтр',
    ko: '필터 적용'
  },
  {
    en: 'Incorrect email/username or password!',
    es: '¡Correo electrónico/nombre de usuario o contraseña incorrectos!',
    fr: "E-mail/nom d'utilisateur ou mot de passe incorrect !",
    de: 'Falsche E-Mail/Benutzername oder Passwort!',
    cn: '电子邮件/用户名或密码不正确！',
    ja: 'メール/ユーザー名またはパスワードが正しくありません！',
    ru: 'Неправильный адрес электронной почты/имя пользователя или пароль!',
    ko: '잘못된 이메일/사용자명 또는 비밀번호입니다!'
  },
  {
    en: 'Account is banned. Please contact the community admin.',
    es: 'La cuenta está prohibida. Póngase en contacto con el administrador de la comunidad.',
    fr: "Le compte est banni. Veuillez contacter l'administrateur de la communauté.",
    de: 'Konto ist gesperrt. Bitte kontaktieren Sie den Community-Administrator.',
    cn: '帐号已被封禁。请联系社区管理员。',
    ja: 'アカウントが禁止されています。コミュニティの管理者に連絡してください。',
    ru: 'Аккаунт заблокирован. Пожалуйста, свяжитесь с администратором сообщества.',
    ko: '계정이 금지되었습니다. 커뮤니티 관리자에게 문의하세요.'
  },
  {
    en: 'Account is inactive. Please verify account.',
    es: 'La cuenta está inactiva. Verifique la cuenta.',
    fr: 'Le compte est inactif. Veuillez vérifier le compte.',
    de: 'Konto ist inaktiv. Bitte verifizieren Sie Ihr Konto.',
    cn: '帐号处于非活跃状态。请验证帐号。',
    ja: 'アカウントが無効です。アカウントを確認してください。',
    ru: 'Аккаунт неактивен. Пожалуйста, подтвердите аккаунт.',
    ko: '계정이 비활성화되었습니다. 계정을 인증하세요.'
  },
  {
    en: 'Account is inactive.',
    es: 'La cuenta está inactiva.',
    fr: 'Le compte est inactif.',
    de: 'Konto ist inaktiv.',
    cn: '帐号处于非活跃状态。',
    ja: 'アカウントが無効です。',
    ru: 'Аккаунт неактивен.',
    ko: '계정이 비활성화되었습니다.'
  },
  {
    en: 'Successfully signed in!',
    es: '¡Iniciado sesión correctamente!',
    fr: 'Connexion réussie !',
    de: 'Anmeldung erfolgreich!',
    cn: '登录成功！',
    ja: 'サインインに成功しました！',
    ru: 'Успешно вошли!',
    ko: '로그인이 성공적으로 완료되었습니다!'
  },
  {
    en: 'Account is suspended. Please contact the community admin.',
    es: 'La cuenta está suspendida. Póngase en contacto con el administrador de la comunidad.',
    fr: "Le compte est suspendu. Veuillez contacter l'administrateur de la communauté.",
    de: 'Konto ist gesperrt. Bitte kontaktieren Sie den Community-Administrator.',
    cn: '帐号已被暂停。请联系社区管理员。',
    ja: 'アカウントが一時停止されています。コミュニティの管理者に連絡してください。',
    ru: 'Аккаунт приостановлен. Пожалуйста, свяжитесь с администратором сообщества.',
    ko: '계정이 정지되었습니다. 커뮤니티 관리자에게 문의하세요.'
  },
  {
    en: 'Click here to verify your account.',
    es: 'Haga clic aquí para verificar su cuenta',
    fr: 'Cliquez ici pour vérifier votre compte',
    de: 'Klicken Sie hier, um Ihr Konto zu verifizieren.',
    cn: '点击这里验证您的帐号。',
    ja: 'アカウントを確認するにはここをクリックしてください。',
    ru: 'Нажмите здесь, чтобы подтвердить свой аккаунт.',
    ko: '계정을 인증하려면 여기를 클릭하세요.'
  },
  {
    en: 'Please verify account to continue.',
    es: 'Verifique la cuenta para continuar.',
    fr: 'Veuillez vérifier le compte pour continuer.',
    de: 'Bitte verifizieren Sie Ihr Konto, um fortzufahren.',
    cn: '请验证帐号以继续。',
    ja: '続行するにはアカウントを確認してください。',
    ru: 'Пожалуйста, подтвердите аккаунт, чтобы продолжить.',
    ko: '계정을 인증하세요.'
  },
  {
    en: 'Unable to verify user. Please try again later.',
    es: 'No se puede verificar el usuario. Por favor, inténtelo de nuevo más tarde.',
    fr: "Impossible de vérifier l'utilisateur. Veuillez réessayer plus tard.",
    de: 'Benutzer konnte nicht verifiziert werden. Bitte versuchen Sie es später erneut.',
    cn: '无法验证用户。请稍后再试。',
    ja: 'ユーザーの確認ができませんでした。後でもう一度お試しください。',
    ru: 'Не удалось подтвердить пользователя. Пожалуйста, повторите попытку позже.',
    ko: '사용자 인증에 실패했습니다. 나중에 다시 시도하세요.'
  },
  {
    en: 'Account verified successfully! Please sign in to continue.',
    es: '¡Cuenta verificada con éxito! Por favor inicie sesión para continuar.',
    fr: 'Compte vérifié avec succès ! Veuillez vous connecter pour continuer.',
    de: 'Konto erfolgreich verifiziert! Bitte melden Sie sich an, um fortzufahren.',
    cn: '帐号验证成功！请登录以继续。',
    ja: 'アカウントが正常に確認されました！続行するにはサインインしてください。',
    ru: 'Аккаунт успешно подтвержден! Пожалуйста, войдите, чтобы продолжить.',
    ko: '계정이 성공적으로 인증되었습니다! 계속하려면 로그인하세요.'
  },
  {
    en: 'Email does not exist in our record.',
    es: 'El correo electrónico no existe en nuestro registro.',
    fr: "L'e-mail n'existe pas dans notre dossier",
    de: 'E-Mail existiert nicht in unseren Aufzeichnungen.',
    cn: '电子邮件在我们的记录中不存在。',
    ja: '記録に存在しないメールアドレスです。',
    ru: 'Адрес электронной почты не существует в наших записях.',
    ko: '이메일이 기록에 없습니다.'
  },
  {
    en: 'Account recovery',
    es: 'Recuperación de Cuenta',
    fr: 'Récupération du compte',
    de: 'Kontowiederherstellung',
    cn: '帐号恢复',
    ja: 'アカウントの復旧',
    ru: 'Восстановление аккаунта',
    ko: '계정 복구'
  },
  {
    en: 'Email already exist! Please try password reset or verify your account.',
    es: '¡Ya existe el correo electrónico! Intente restablecer la contraseña o verifique su cuenta.',
    fr: "L'e-mail existe déjà ! Veuillez essayer de réinitialiser le mot de passe ou vérifier votre compte.",
    de: 'E-Mail existiert bereits! Bitte versuchen Sie es mit dem Zurücksetzen des Passworts oder verifizieren Sie Ihr Konto.',
    cn: '电子邮件已存在！请尝试重置密码或验证您的帐号。',
    ja: 'メールアドレスはすでに存在しています！パスワードのリセットを試すか、アカウントを確認してください。',
    ru: 'Адрес электронной почты уже существует! Пожалуйста, попробуйте сбросить пароль или подтвердите свой аккаунт.',
    ko: '이미 이메일이 존재합니다! 비밀번호 재설정 또는 계정을 인증하세요.'
  },
  {
    en: 'Failed. Please try again later.',
    es: 'Fallido. Por favor, inténtelo de nuevo más tarde.',
    fr: 'Échoué. Veuillez réessayer plus tard',
    de: 'Fehlgeschlagen. Bitte versuchen Sie es später erneut.',
    cn: '失败。请稍后再试。',
    ja: '失敗しました。後でもう一度お試しください。',
    ru: 'Не удалось. Пожалуйста, повторите попытку позже.',
    ko: '실패했습니다. 나중에 다시 시도하세요.'
  },
  {
    en: 'Uploading image....',
    es: 'Subiendo imagen....',
    fr: "Téléchargement de l'image....",
    de: 'Bild wird hochgeladen....',
    cn: '正在上传图片....',
    ja: '画像をアップロード中....',
    ru: 'Загрузка изображения....',
    ko: '이미지 업로드 중....'
  },
  {
    en: 'Image uploaded successfully!',
    es: '¡Imagen cargada con éxito!',
    fr: 'Image téléchargée avec succès !',
    de: 'Bild erfolgreich hochgeladen!',
    cn: '图片上传成功！',
    ja: '画像が正常にアップロードされました！',
    ru: 'Изображение успешно загружено!',
    ko: '이미지가 성공적으로 업로드되었습니다!'
  },
  {
    en: 'Current password is required to make changes.',
    es: 'Se requiere contraseña actual para hacer cambios.',
    fr: 'Le mot de passe actuel est requis pour apporter des modifications.',
    de: 'Aktuelles Passwort ist erforderlich, um Änderungen vorzunehmen.',
    cn: '需要当前密码以进行更改。',
    ja: '変更を行うには現在のパスワードが必要です。',
    ru: 'Текущий пароль требуется для внесения изменений.',
    ko: '변경 사항을 적용하려면 현재 비밀번호를 입력하세요.'
  },
  {
    en: 'Account updated successfully!',
    es: '¡Cuenta actualizada con éxito!',
    fr: 'Compte mis à jour avec succès !',
    de: 'Konto erfolgreich aktualisiert!',
    cn: '帐号更新成功！',
    ja: 'アカウントが正常に更新されました',
    ru: 'Аккаунт успешно обновлен!',
    ko: '계정이 성공적으로 업데이트되었습니다!'
  },
  {
    en: 'Unable to make changes! Current password is incorrect.',
    es: '¡No se pueden hacer cambios! La contraseña actual es incorrecta.',
    fr: "Impossible d'apporter des modifications ! Ce mot de passe est incorrect.",
    de: 'Änderungen konnten nicht vorgenommen werden! Aktuelles Passwort ist falsch.',
    cn: '无法进行更改！当前密码不正确。',
    ja: '変更を行えませんでした！現在のパスワードが正しくありません。',
    ru: 'Невозможно внести изменения! Текущий пароль неверен.',
    ko: '변경 사항을 적용할 수 없습니다! 현재 비밀번호가 일치하지 않습니다.'
  },
  {
    en: 'Password is too short! Minimum character is six.',
    es: '¡La contraseña es demasiado corta! El carácter mínimo es seis.',
    fr: 'Le mot de passe est trop court! Le caractère minimum est six.',
    de: 'Passwort ist zu kurz! Mindestens sechs Zeichen erforderlich.',
    cn: '密码太短！最少六个字符。',
    ja: 'パスワードが短すぎます！最小6文字以上を入力してください。',
    ru: 'Пароль слишком короткий! Минимальное количество символов - шесть.',
    ko: '비밀번호가 너무 짧습니다! 최소 6자 이상이어야 합니다.'
  },
  {
    en: 'Password updated successfully!',
    es: '¡Contraseña actualizada exitosamente!',
    fr: 'Mot de passe mis à jour avec succès!',
    de: 'Passwort erfolgreich aktualisiert!',
    cn: '密码更新成功！',
    ja: 'パスワードが正常に更新されました！',
    ru: 'Пароль успешно обновлен!',
    ko: '비밀번호가 성공적으로 업데이트되었습니다!'
  },
  {
    en: 'Unable to change password. Please try again.',
    es: 'No se puede cambiar la contraseña. Inténtalo de nuevo.',
    fr: 'Impossible de changer le mot de passe. Veuillez réessayer.',
    de: 'Passwort konnte nicht geändert werden. Bitte versuchen Sie es erneut.',
    cn: '无法更改密码。请重试。',
    ja: 'パスワードを変更できません。もう一度お試しください。',
    ru: 'Не удалось изменить пароль. Пожалуйста, попробуйте снова.',
    ko: '비밀번호를 변경할 수 없습니다. 다시 시도해주세요.'
  },
  {
    en: 'Add category',
    es: 'Añadir categoría',
    fr: 'Ajouter une catégorie',
    de: 'Kategorie hinzufügen',
    cn: '添加分类',
    ja: 'カテゴリを追加',
    ru: 'Добавить категорию',
    ko: '카테고리 추가'
  },
  {
    en: 'Create a category',
    es: 'Crear una categoría',
    fr: 'Créer une catégorie',
    de: 'Kategorie erstellen',
    cn: '创建分类',
    ja: 'カテゴリを作成',
    ru: 'Создать категорию',
    ko: '카테고리 생성'
  },
  {
    en: 'Authentication',
    es: 'Autenticación',
    fr: 'Authentification',
    de: 'Authentifizierung',
    cn: '身份验证',
    ja: '認証',
    ru: 'Аутентификация',
    ko: '인증'
  },
  {
    en: 'No',
    es: 'No',
    fr: 'Aucun',
    de: 'Nein',
    cn: '否',
    ja: 'いいえ',
    ru: 'Нет',
    ko: '아니요'
  },
  {
    en: 'Yes',
    es: 'Sí',
    fr: 'Oui',
    de: 'Ja',
    cn: '是',
    ja: 'はい',
    ru: 'Да',
    ko: '예'
  },
  {
    en: 'Create a Category',
    es: 'Crear una categoría',
    fr: 'Créer une catégorie',
    de: 'Kategorie erstellen',
    cn: '创建分类',
    ja: 'カテゴリを作成',
    ru: 'Создать категорию',
    ko: '카테고리 생성'
  },
  {
    en: 'Authentication required',
    es: 'Se requiere autenticación',
    fr: 'Authentification requise',
    de: 'Authentifizierung erforderlich',
    cn: '需要身份验证',
    ja: '認証が必要です',
    ru: 'Требуется аутентификация',
    ko: '인증이 필요합니다'
  },
  {
    en: 'Save',
    es: 'Guardar',
    fr: 'Enregistrer',
    de: 'Speichern',
    cn: '保存',
    ja: '保存',
    ru: 'Сохранить',
    ko: '저장'
  },
  {
    en: 'Choose one or more',
    es: 'Elija uno o más',
    fr: 'Choisissez un ou plusieurs ',
    de: 'Eine oder mehrere auswählen',
    cn: '选择一个或多个',
    ja: '1つ以上選択してください',
    ru: 'Выберите одну или несколько',
    ko: '하나 이상 선택'
  },
  {
    en: 'Description',
    es: 'Descripción',
    fr: 'La description',
    de: 'Beschreibung',
    cn: '描述',
    ja: '説明',
    ru: 'Описание',
    ko: '설명'
  },
  {
    en: 'Edit category',
    es: 'Editar categoría',
    fr: 'Modifier la catégorie',
    de: 'Kategorie bearbeiten',
    cn: '编辑分类',
    ja: 'カテゴリを編集',
    ru: 'Редактировать категорию',
    ko: '카테고리 편집'
  },
  {
    en: 'Metadata',
    es: 'Metadata',
    fr: 'Métadonnées',
    de: 'Metadaten',
    cn: '元数据',
    ja: 'メタデータ',
    ru: 'Метаданные',
    ko: '메타데이터'
  },
  {
    en: 'Sender name',
    es: 'Nombre del remitente',
    fr: "Nom de l'expéditeur",
    de: 'Absendername',
    cn: '发件人姓名',
    ja: '送信者名',
    ru: 'Имя отправителя',
    ko: '발신자 이름'
  },
  {
    en: 'Sender email',
    es: 'Correo del remitente',
    fr: "E-mail de l'expéditeur",
    de: 'Absender-E-Mail',
    cn: '发件人电子邮件',
    ja: '送信者のメール',
    ru: 'Электронная почта отправителя',
    ko: '보내는 사람 이메일'
  },
  {
    en: 'Welcome email',
    es: 'Correo de bienvenida',
    fr: 'E-mail de bienvenue',
    de: 'Willkommens-E-Mail',
    cn: '欢迎邮件',
    ja: 'ようこそメール',
    ru: 'Приветственное письмо',
    ko: '환영 이메일'
  },
  {
    en: 'General settings',
    es: 'Configuraciones generales',
    fr: 'Paramètres généraux',
    de: 'Allgemeine Einstellungen',
    cn: '常规设置',
    ja: '一般設定',
    ru: 'Общие настройки',
    ko: '일반 설정'
  },
  {
    en: 'Site favicon',
    es: 'Sitio Favicon',
    fr: 'Favicon du site',
    de: 'Seiten-Favicon',
    cn: '站点图标',
    ja: 'サイトのファビコン',
    ru: 'Иконка сайта',
    ko: '사이트 파비콘'
  },
  {
    en: 'Site logo',
    es: 'Logotipo del sitio',
    fr: 'Logo du site ',
    de: 'Seiten-Logo',
    cn: '站点标志',
    ja: 'サイトのロゴ',
    ru: 'Логотип сайта',
    ko: '사이트 로고'
  },
  {
    en: 'Site name',
    es: 'Nombre del sitio',
    fr: 'Nom du site ',
    de: 'Seitenname',
    cn: '站点名称',
    ja: 'サイト名',
    ru: 'Имя сайта',
    ko: '사이트 이름'
  },
  {
    en: 'Site description',
    es: 'Descripción del sitio',
    fr: 'Description du site',
    de: 'Seitenbeschreibung',
    cn: '站点描述',
    ja: 'サイトの説明',
    ru: 'Описание сайта',
    ko: '사이트 설명'
  },
  {
    en: 'Site metadata',
    es: 'Metadatos del sitio',
    fr: 'Métadonnées du site',
    de: 'Seiten-Metadaten',
    cn: '站点元数据',
    ja: 'サイトのメタデータ',
    ru: 'Метаданные сайта',
    ko: '사이트 메타데이터'
  },
  {
    en: 'Site language',
    es: 'Idioma del sitio',
    fr: 'Langue du site',
    de: 'Seitensprache',
    cn: '站点语言',
    ja: 'サイトの言語',
    ru: 'Язык сайта',
    ko: '사이트 언어'
  },
  {
    en: 'Language',
    es: 'Idioma',
    fr: 'La langue',
    de: 'Sprache',
    cn: '语言',
    ja: '言語',
    ru: 'Язык',
    ko: '언어'
  },
  {
    en: 'Back',
    es: 'Atrás',
    fr: 'Dos',
    de: 'Zurück',
    cn: '返回',
    ja: '戻る',
    ru: 'Назад',
    ko: '뒤로'
  },
  {
    en: 'Advert code',
    es: 'Código de anuncio',
    fr: "Code de l'annonce",
    de: 'Anzeigen-Code',
    cn: '广告代码',
    ja: '広告コード',
    ru: 'Рекламный код',
    ko: '광고 코드'
  },
  {
    en: 'Save & launch',
    es: 'Guardar y lanzar',
    fr: 'Enregistrer et lancer',
    de: 'Speichern & starten',
    cn: '保存并启动',
    ja: '保存して起動',
    ru: 'Сохранить и запустить',
    ko: '저장 및 런칭'
  },
  {
    en: 'English',
    es: 'Inglés',
    fr: 'Anglais',
    de: 'Englisch',
    cn: '英语',
    ja: '英語',
    ru: 'Английский',
    ko: '영어'
  },
  {
    en: 'French',
    es: 'Francés',
    fr: 'Français',
    de: 'Französisch',
    cn: '法语',
    ja: 'フランス語',
    ru: 'Французский',
    ko: '프랑스어'
  },
  {
    en: 'Spanish',
    es: 'Español',
    fr: 'Espagnol',
    de: 'Spanisch',
    cn: '西班牙语',
    ja: 'スペイン語',
    ru: 'Испанский',
    ko: '스페인어'
  },
  {
    en: 'German',
    es: 'Alemán',
    fr: 'Deutsch',
    de: 'Deutsch',
    cn: '德语',
    ja: 'ドイツ人',
    ru: 'Немецкий',
    ko: '독일어'
  },
  {
    en: 'Chinese',
    es: 'Chino',
    fr: 'Chinois',
    de: 'Chinesisch',
    cn: '普通话',
    ja: '北京語',
    ru: 'Китайский',
    ko: '중국어'
  },
  {
    en: 'Japanese',
    es: 'Japonés',
    fr: 'Japonais',
    de: 'Japanisch',
    cn: '日本人',
    ja: '日本',
    ru: 'Японский',
    ko: '일본어'
  },
  {
    en: 'Korean',
    es: 'Coreano',
    fr: 'Coréen',
    de: 'Koreanisch',
    cn: '韩国人',
    ja: '韓国語',
    ru: 'Корейский',
    ko: '한국어'
  },
  {
    en: 'Russian',
    es: 'Ruso',
    fr: 'Russe',
    de: 'Russisch',
    cn: '俄语',
    ja: 'ロシア',
    ru: 'Русский',
    ko: '러시아어'
  },
  {
    en: 'en',
    es: 'Inglés',
    fr: 'Anglais',
    de: 'en',
    cn: '英语',
    ja: 'en',
    ru: 'en',
    ko: 'en'
  },
  {
    en: 'fr',
    es: 'Francés',
    fr: 'Français',
    de: 'fr',
    cn: '法语',
    ja: 'fr',
    ru: 'fr',
    ko: 'fr'
  },
  {
    en: 'es',
    es: 'Español',
    fr: 'Espagnol',
    de: 'es',
    cn: '西班牙语',
    ja: 'es',
    ru: 'es',
    ko: 'es'
  },
  {
    en: 'coming soon',
    es: 'muy pronto',
    fr: 'à venir',
    de: 'Demnächst verfügbar',
    cn: '即将推出',
    ja: '近日公開',
    ru: 'скоро',
    ko: '곧 출시 예정'
  },
  {
    en: 'Settings updated successfully',
    es: 'Configuración actualizada con éxito',
    fr: 'Paramètres mis à jour avec succès',
    de: 'Einstellungen erfolgreich aktualisiert',
    cn: '设置更新成功',
    ja: '設定が正常に更新されました',
    ru: 'Настройки успешно обновлены',
    ko: '설정이 성공적으로 업데이트되었습니다.'
  },
  {
    en: 'Error updating settings! Please try again.',
    es: '¡Error al actualizar la configuración! Inténtalo de nuevo.',
    fr: 'Erreur lors de la mise à jour des paramètres ! Veuillez réessayer.',
    de: 'Fehler beim Aktualisieren der Einstellungen! Bitte versuchen Sie es erneut.',
    cn: '更新设置出错！请重试。',
    ja: '設定の更新中にエラーが発生しました。もう一度お試しください。',
    ru: 'Ошибка при обновлении настроек! Пожалуйста, попробуйте снова.',
    ko: '설정 업데이트 오류! 다시 시도해주세요.'
  },
  {
    en: 'Social settings',
    es: 'Ajustes sociales',
    fr: 'Paramètres sociaux',
    de: 'Soziale Einstellungen',
    cn: '社交设置',
    ja: 'ソーシャル設定',
    ru: 'Настройки социальных сетей',
    ko: '소셜 설정'
  },
  {
    en: 'Advert settings',
    es: 'Configuración de anuncio',
    fr: "Paramètres de l'annonce",
    de: 'Anzeigeneinstellungen',
    cn: '广告设置',
    ja: '広告設定',
    ru: 'Настройки рекламы',
    ko: '광고 설정'
  },
  {
    en: "Note: Changing the point value will affect users' current points.",
    es: 'Nota: Cambiar el valor de los puntos afectará los puntos actuales de los usuarios.',
    fr: 'Remarque : Modifier la valeur des points affectera les points actuels des utilisateurs.',
    de: 'Hinweis: Das Ändern des Punktwerts wirkt sich auf die aktuellen Punkte der Benutzer aus.',
    cn: '注意：更改积分值将影响用户的当前积分。',
    ja: '注意：ポイントの値を変更すると、ユーザーの現在のポイントに影響します。',
    ru: 'Примечание: Изменение значения баллов повлияет на текущие баллы пользователей.',
    ko: '참고: 포인트 값을 변경하면 사용자의 현재 포인트에 영향을 미칩니다.'
  },
  {
    en: 'Top',
    es: 'Parte superior',
    fr: 'Haut',
    de: 'Oben',
    cn: '顶部',
    ja: '上部',
    ru: 'Сверху',
    ko: '상단'
  },
  {
    en: 'Left side',
    es: 'Lado izquierdo',
    fr: 'Côté gauche',
    de: 'Linke Seite',
    cn: '左侧',
    ja: '左側',
    ru: 'Слева',
    ko: '왼쪽'
  },
  {
    en: 'Right side',
    es: 'Derecha',
    fr: 'Côté droit',
    de: 'Rechte Seite',
    cn: '右侧',
    ja: '右側',
    ru: 'Справа',
    ko: '오른쪽'
  },
  {
    en: 'Inner',
    es: 'Interior',
    fr: 'Interne',
    de: 'Innen',
    cn: '内部',
    ja: '内側',
    ru: 'Внутри',
    ko: '안쪽'
  },
  {
    en: 'Please provide SMTP host',
    es: 'Por favor proporcione el host SMTP',
    fr: "Veuillez indiquer l'hôte SMTP",
    de: 'Bitte geben Sie den SMTP-Host an',
    cn: '请提供SMTP主机',
    ja: 'SMTPホストを入力してください',
    ru: 'Пожалуйста, укажите SMTP-хост',
    ko: 'SMTP 호스트를 제공해주세요.'
  },
  {
    en: 'Email settings',
    es: 'Ajustes del correo electrónico',
    fr: 'Paramètres de messagerie',
    de: 'E-Mail-Einstellungen',
    cn: '电子邮件设置',
    ja: 'メール設定',
    ru: 'Настройки электронной почты',
    ko: '이메일 설정'
  },
  {
    en: 'Advert Code',
    es: 'Código de anuncio',
    fr: 'Code publicitaire',
    de: 'Anzeigencode',
    cn: '广告代码',
    ja: '広告コード',
    ru: 'Рекламный код',
    ko: '광고 코드'
  },
  {
    en: 'SMTP port',
    es: 'Puerto SMTP',
    fr: 'Port SMTP',
    de: 'SMTP-Port',
    cn: 'SMTP端口',
    ja: 'SMTPポート',
    ru: 'Порт SMTP',
    ko: 'SMTP 포트'
  },
  {
    en: 'SMTP host',
    es: 'Servidor SMTP',
    fr: 'Hôte SMTP',
    de: 'SMTP-Host',
    cn: 'SMTP主机',
    ja: 'SMTPホスト',
    ru: 'SMTP-хост',
    ko: 'SMTP 호스트'
  },
  {
    en: 'SMTP user/email',
    es: 'Usuario / correo electrónico SMTP',
    fr: 'Utilisateur / email SMTP',
    de: 'SMTP-Benutzer/E-Mail',
    cn: 'SMTP用户/电子邮件',
    ja: 'SMTPユーザー/メール',
    ru: 'SMTP-пользователь/почта',
    ko: 'SMTP 사용자/이메일'
  },
  {
    en: 'SMTP password',
    es: 'Contraseña SMTP',
    fr: 'Mot de passe SMTP',
    de: 'SMTP-Passwort',
    cn: 'SMTP密码',
    ja: 'SMTPパスワード',
    ru: 'SMTP-пароль',
    ko: 'SMTP 비밀번호'
  },
  {
    en: 'Reward settings',
    es: 'Configuración de recompensas',
    fr: 'Paramètres de récompense',
    de: 'Belohnungseinstellungen',
    cn: '奖励设置',
    ja: '報酬の設定',
    ru: 'Настройки вознаграждения',
    ko: '보상 설정'
  },
  {
    en: 'Note: Changing point values will affect users current value',
    es: 'Nota: El cambio de los valores de las monedas afectará el valor actual de los usuarios',
    fr: 'Remarque: la modification des valeurs des pièces affectera la valeur actuelle des utilisateurs',
    de: 'Hinweis: Die Änderung der Münzwerte wirkt sich auf den aktuellen Wert der Benutzer aus',
    cn: '注意：更改硬币值将影响用户的当前值。',
    ja: '注：コインの値を変更すると、ユーザーの現在の値に影響します。',
    ru: 'Примечание: Изменение значения монеты повлияет на текущее значение пользователей.',
    ko: '참고: 코인 값 변경은 사용자의 현재 값을 영향을 미칩니다.'
  },
  {
    en: 'Login reward',
    es: 'Recogida de sesión',
    fr: 'Récompense de connexion',
    de: 'Belohnung für Anmeldung',
    cn: '登录奖励',
    ja: 'ログイン報酬',
    ru: 'Награда за вход',
    ko: '로그인 보상'
  },
  {
    en: 'Discussion reward',
    es: 'Discusión recompensa',
    fr: 'Récompense de discussion',
    de: 'Belohnung für Diskussionen',
    cn: '讨论奖励',
    ja: 'ディスカッション報酬',
    ru: 'Награда за обсуждение',
    ko: '토론 보상'
  },
  {
    en: 'Comment reward',
    es: 'Comentario Recompensa',
    fr: 'Commentaire récompense',
    de: 'Belohnung für Kommentare',
    cn: '评论奖励',
    ja: 'コメント報酬',
    ru: 'Награда за комментарий',
    ko: '댓글 보상'
  },
  {
    en: 'Best answer reward',
    es: 'Recompensa de mejor respuesta',
    fr: 'Meilleure récompense de réponse ',
    de: 'Belohnung für beste Antwort',
    cn: '最佳答案奖励',
    ja: 'ベストアンサー報酬',
    ru: 'Награда за лучший ответ',
    ko: '최고 답변 보상'
  },
  {
    en: 'Banned words',
    es: 'Palabras prohibidas',
    fr: 'Mots interdits',
    de: 'Gesperrte Wörter',
    cn: '禁用词汇',
    ja: '禁止ワード',
    ru: 'Запрещенные слова',
    ko: '금지된 단어'
  },
  {
    en: 'Sign into your account',
    es: 'Inicie sesión en su cuenta',
    fr: 'Connectez-vous à votre compte',
    de: 'Melden Sie sich in Ihrem Konto an',
    cn: '登录您的帐户',
    ja: 'アカウントにサインイン',
    ru: 'Войдите в свою учетную запись',
    ko: '계정에 로그인'
  },
  {
    en: 'Email or username',
    es: 'Correo electrónico o nombre de usuario',
    fr: "Email ou nom d'utilisateur",
    de: 'E-Mail oder Benutzername',
    cn: '电子邮件或用户名',
    ja: 'メールアドレスまたはユーザー名',
    ru: 'Эл. адрес или имя пользователя',
    ko: '이메일 또는 사용자 이름'
  },
  {
    en: 'Password',
    es: 'Contraseña',
    fr: 'Mot de passe',
    de: 'Passwort',
    cn: '密码',
    ja: 'パスワード',
    ru: 'Пароль',
    ko: '비밀번호'
  },
  {
    en: 'Login',
    es: 'Iniciar',
    fr: 'Se connecter',
    de: 'Anmelden',
    cn: '登录',
    ja: 'ログイン',
    ru: 'Войти',
    ko: '로그인'
  },
  {
    en: 'Log In',
    es: 'Iniciar',
    fr: 'Se connecter',
    de: 'Anmelden',
    cn: '登录',
    ja: 'ログイン',
    ru: 'Войти',
    ko: '로그인'
  },
  {
    en: 'Forgotten Password?',
    es: '¿Contraseña olvidada?',
    fr: 'Mot de passe oublié?',
    de: 'Passwort vergessen?',
    cn: '忘记密码？',
    ja: 'パスワードをお忘れですか？',
    ru: 'Забыли пароль?',
    ko: '비밀번호를 잊으셨나요?'
  },
  {
    en: 'Reset here',
    es: 'Reiniciar aquí',
    fr: 'Réinitialiser ici',
    de: 'Hier zurücksetzen',
    cn: '在这里重置',
    ja: 'こちらでリセット',
    ru: 'Сбросить здесь',
    ko: '여기에서 초기화'
  },
  {
    en: 'Not a member?',
    es: '¿No eres miembro?',
    fr: 'Pas un membre?',
    de: 'Noch kein Mitglied?',
    cn: '还不是会员？',
    ja: 'メンバーではありませんか？',
    ru: 'Еще не зарегистрированы?',
    ko: '회원이 아니신가요?'
  },
  {
    en: 'Signup',
    es: 'Inscribirse',
    fr: "S'inscrire",
    de: 'Registrieren',
    cn: '注册',
    ja: '新規登録',
    ru: 'Зарегистрироваться',
    ko: '가입'
  },
  {
    en: 'Signup here',
    es: 'Regístrese aquí',
    fr: 'Inscrivez-vous ici ',
    de: 'Hier registrieren',
    cn: '在这里注册',
    ja: 'こちらでサインアップ',
    ru: 'Зарегистрироваться здесь',
    ko: '여기에서 가입'
  },
  {
    en: 'Password retrieval',
    es: 'Recuperación de contraseñas',
    fr: 'Récupération du mot de passe',
    de: 'Passwort-Wiederherstellung',
    cn: '密码找回',
    ja: 'パスワードの取得',
    ru: 'Восстановление пароля',
    ko: '비밀번호 복구'
  },
  {
    en: 'Email address',
    es: 'Dirección de correo electrónico',
    fr: 'Adresse e-mail',
    de: 'E-Mail-Adresse',
    cn: '电子邮件地址',
    ja: 'メールアドレス',
    ru: 'Адрес электронной почты',
    ko: '이메일 주소'
  },
  {
    en: 'Reset password',
    es: 'Restablecer contraseña',
    fr: 'Réinitialiser le mot de passe',
    de: 'Passwort zurücksetzen',
    cn: '重置密码',
    ja: 'パスワードをリセット',
    ru: 'Сброс пароля',
    ko: '비밀번호 초기화'
  },
  {
    en: 'Back to login',
    es: 'Volver a Iniciar sesión',
    fr: 'Retour à la connexion',
    de: 'Zurück zur Anmeldung',
    cn: '返回登录',
    ja: 'ログインに戻る',
    ru: 'Вернуться к входу',
    ko: '로그인으로 돌아가기'
  },
  {
    en: 'Reset your password',
    es: 'Restablezca su contraseña',
    fr: 'réinitialisez votre mot de passe',
    de: 'Passwort zurücksetzen',
    cn: '重置您的密码',
    ja: 'パスワードをリセットしてください',
    ru: 'Сброс пароля',
    ko: '비밀번호를 재설정하세요'
  },
  {
    en: 'Select language',
    es: 'Seleccione el idioma',
    fr: 'Choisir la langue',
    de: 'Sprache auswählen',
    cn: '选择语言',
    ja: '言語を選択してください',
    ru: 'Выберите язык',
    ko: '언어 선택'
  },
  {
    en: 'Continue',
    es: 'Continuar',
    fr: 'Continuer',
    de: 'Weiter',
    cn: '继续',
    ja: '続ける',
    ru: 'Продолжить',
    ko: '계속'
  },
  {
    en: 'Welcome',
    es: 'Bienvenue',
    fr: 'Bienvenue',
    de: 'Willkommen',
    cn: '欢迎',
    ja: 'ようこそ',
    ru: 'Добро пожаловать',
    ko: '환영합니다'
  },
  {
    en: "Welcome, Let's setup blazingly!",
    es: '¡Bienvenido, vamos a configurar deslumbrantemente!',
    fr: 'Bienvenue, installons-nous de manière flamboyante !',
    de: 'Willkommen, lassen Sie uns die Einrichtung starten!',
    cn: '欢迎，让我们快速设置！',
    ja: 'ようこそ、簡単にセットアップしましょう！',
    ru: 'Добро пожаловать! Давайте настроим все настройки!',
    ko: '환영합니다, 빠르게 설정해봅시다!'
  },
  {
    en: 'Enter code sent to your email',
    es: 'Ingrese el código enviado a su correo electrónico',
    fr: 'Entrez le code envoyé à votre e-mail',
    de: 'Geben Sie den an Ihre E-Mail gesendeten Code ein',
    cn: '输入发送到您电子邮件的代码',
    ja: 'メールで送信されたコードを入力してください',
    ru: 'Введите код, отправленный на вашу электронную почту',
    ko: '이메일로 전송된 코드를 입력하세요'
  },
  {
    en: 'New Password',
    es: 'Nueva contraseña',
    fr: 'Nouveau mot de passe',
    de: 'Neues Passwort',
    cn: '新密码',
    ja: '新しいパスワード',
    ru: 'Новый пароль',
    ko: '새 비밀번호'
  },
  {
    en: 'Retype Password',
    es: 'Vuelva a escribir la contraseña',
    fr: 'Retaper le mot de passe',
    de: 'Passwort erneut eingeben',
    cn: '重新输入密码',
    ja: 'パスワードを再入力',
    ru: 'Повторите пароль',
    ko: '비밀번호 재입력'
  },
  {
    en: 'Code is incorrect or expired.',
    es: 'El código es incorrecto o venció.',
    fr: 'Le code est incorrect ou expiré.',
    de: 'Code ist falsch oder abgelaufen.',
    cn: '代码不正确或已过期。',
    ja: 'コードが間違っているか期限が切れています。',
    ru: 'Код неверен или истек срок действия.',
    ko: '코드가 잘못되었거나 만료되었습니다.'
  },
  {
    en: 'Passwords does not matched!',
    es: '¡Las contraseñas no pointciden!',
    fr: 'Les mots de passe ne correspondent pas!',
    de: 'Passwörter stimmen nicht überein!',
    cn: '密码不匹配！',
    ja: 'パスワードが一致しません！',
    ru: 'Пароли не совпадают!',
    ko: '비밀번호가 일치하지 않습니다!'
  },
  {
    en: 'Password reset successfully!',
    es: 'Restablecimiento de contraseña correctamente!',
    fr: 'Réinitialisation du mot de passe avec succès!',
    de: 'Passwort erfolgreich zurückgesetzt!',
    cn: '密码重置成功！',
    ja: 'パスワードのリセットが成功しました！',
    ru: 'Пароль успешно сброшен!',
    ko: '비밀번호가 성공적으로 재설정되었습니다!'
  },
  {
    en: 'Unable to update user. Please try again later.',
    es: 'No se puede actualizar el usuario.  Vuelva a intentarlo más tarde.',
    fr: "Impossible de mettre à jour l'utilisateur. Veuillez réessayer plus tard.",
    de: 'Benutzer konnte nicht aktualisiert werden. Bitte versuchen Sie es später erneut.',
    cn: '无法更新用户。请稍后重试。',
    ja: 'ユーザーの更新に失敗しました。後でもう一度お試しください。',
    ru: 'Не удалось обновить пользователя. Повторите попытку позже.',
    ko: '사용자 업데이트를 할 수 없습니다. 나중에 다시 시도해주세요.'
  },
  {
    en: 'Account created successfully! Please verify account to continue.',
    es: '¡Cuenta creada correctamente! Verifique la cuenta para continuar.',
    fr: 'Compte créé avec succès! Veuillez vérifier le compte pour continuer.',
    de: 'Konto erfolgreich erstellt! Bitte überprüfen Sie Ihr Konto, um fortzufahren.',
    cn: '帐户创建成功！请验证帐户以继续。',
    ja: 'アカウントの作成に成功しました！続行するにはアカウントを確認してください。',
    ru: 'Учетная запись успешно создана! Пожалуйста, подтвердите учетную запись, чтобы продолжить.',
    ko: '계정이 성공적으로 생성되었습니다! 계정을 확인하려면 계속 진행하세요.'
  },
  {
    en: 'Create your account',
    es: 'Crea tu cuenta',
    fr: 'Créez votre compte',
    de: 'Erstellen Sie Ihr Konto',
    cn: '创建您的帐户',
    ja: 'アカウントの作成',
    ru: 'Создайте свою учетную запись',
    ko: '계정 생성하기'
  },
  {
    en: 'Account verification',
    es: 'Verificación de la cuenta',
    fr: 'Vérification de compte',
    de: 'Kontoverifizierung',
    cn: '帐户验证',
    ja: 'アカウントの確認',
    ru: 'Подтверждение учетной записи',
    ko: '계정 확인'
  },
  {
    en: 'Fullname',
    es: 'Nombre completo',
    fr: 'Nom et prénom',
    de: 'Vollständiger Name',
    cn: '全名',
    ja: 'フルネーム',
    ru: 'Полное имя',
    ko: '성명'
  },
  {
    en: 'Username is available.',
    es: 'El nombre de usuario está disponible.',
    fr: "Le nom d'utilisateur est disponible.",
    de: 'Benutzername ist verfügbar.',
    cn: '用户名可用。',
    ja: 'ユーザー名は使用可能です。',
    ru: 'Имя пользователя доступно.',
    ko: '사용자 이름이 사용 가능합니다.'
  },
  {
    en: 'Username is not available. Try another name.',
    es: 'El nombre de usuario no está disponible. Pruebe con otro nombre.',
    fr: "Le nom d'utilisateur n'est pas disponible. Essayez un autre nom.",
    de: 'Benutzername ist nicht verfügbar. Bitte versuchen Sie einen anderen Namen.',
    cn: '用户名不可用。请尝试其他名称。',
    ja: 'ユーザー名は利用できません。別の名前を試してください。',
    ru: 'Имя пользователя недоступно. Попробуйте другое имя.',
    ko: '사용자 이름이 사용 불가능합니다. 다른 이름을 시도하세요.'
  },
  {
    en: 'Have an account?',
    es: '¿Tener una cuenta?',
    fr: 'Avoir un compte?',
    de: 'Sie haben bereits ein Konto?',
    cn: '已有帐户？',
    ja: 'アカウントをお持ちですか？',
    ru: 'Уже есть аккаунт?',
    ko: '계정이 이미 있나요?'
  },
  {
    en: 'Login here',
    es: 'Iniciar sesión aquí',
    fr: 'Connectez-vous ici',
    de: 'Hier anmelden',
    cn: '在这里登录',
    ja: 'こちらでログイン',
    ru: 'Войти здесь',
    ko: '여기에서 로그인'
  },
  {
    en: 'Fullname is too short.',
    es: 'FullName es demasiado corto.',
    fr: 'FullName est trop court.',
    de: 'Vollständiger Name ist zu kurz.',
    cn: '全名太短。',
    ja: 'フルネームが短すぎます。',
    ru: 'Слишком короткое полное имя.',
    ko: '성명이 너무 짧습니다.'
  },
  {
    en: 'Please enter a username with at least 3 characters. Only letters, numbers, and underscores are supported.',
    es: 'Por favor, ingrese un nombre de usuario con al menos 3 caracteres. Solo se permiten letras, números y guiones bajos.',
    fr: "Veuillez entrer un nom d'utilisateur d'au moins 3 caractères. Seules les lettres, les chiffres et les traits de soulignement sont autorisés.",
    de: 'Bitte geben Sie einen Benutzernamen mit mindestens 3 Zeichen ein. Es werden nur Buchstaben, Zahlen und Unterstriche unterstützt.',
    cn: '请输入至少 3 个字符的用户名。仅支持字母、数字和下划线。',
    ja: 'ユーザー名は3文字以上で入力してください。使用できるのは文字、数字、アンダースコアのみです。',
    ru: 'Пожалуйста, введите имя пользователя длиной не менее 3 символов. Поддерживаются только буквы, цифры и символы подчеркивания.',
    ko: '사용자 이름은 최소 3자 이상 입력해 주세요. 문자, 숫자 및 밑줄만 지원됩니다.'
  },
  {
    en: 'Site name is too short. Minimum character is three.',
    es: 'El nombre del sitio es demasiado corto. El mínimo de caracteres es tres.',
    fr: 'Le nom du site est trop court. Le nombre minimum de caractères est de trois.',
    de: 'Der Seitenname ist zu kurz. Die Mindestanzahl der Zeichen ist drei.',
    cn: '站点名称太短。最少需要三个字符。',
    ja: 'サイト名が短すぎます。最低3文字必要です。',
    ru: 'Название сайта слишком короткое. Минимальное количество символов — три.',
    ko: '사이트 이름이 너무 짧습니다. 최소 세 글자 이상이어야 합니다.'
  },
  {
    en: 'Site description is too short. Minimum character is ten.',
    es: 'La descripción del sitio es demasiado corta. El mínimo de caracteres es diez.',
    fr: 'La description du site est trop courte. Le nombre minimum de caractères est de dix.',
    de: 'Die Seitenbeschreibung ist zu kurz. Die Mindestanzahl der Zeichen ist zehn.',
    cn: '站点描述太短。最少需要十个字符。',
    ja: 'サイトの説明が短すぎます。最低10文字必要です。',
    ru: 'Описание сайта слишком короткое. Минимальное количество символов — десять.',
    ko: '사이트 설명이 너무 짧습니다. 최소 열 글자 이상이어야 합니다.'
  },
  {
    en: 'Invalid email address',
    es: 'Dirección de correo electrónico no válida',
    fr: 'Adresse e-mail non valide',
    de: 'Ungültige E-Mail-Adresse',
    cn: '无效的电子邮件地址',
    ja: '無効なメールアドレスです。',
    ru: 'Недопустимый адрес электронной почты',
    ko: '유효하지 않은 이메일 주소입니다.'
  },
  {
    en: 'Password is too short. Minimum character is six.',
    es: 'La contraseña es demasiado corta. El carácter mínimo es seis.',
    fr: 'Le mot de passe est trop court. Le caractère minimum est de six.',
    de: 'Passwort ist zu kurz. Mindestens sechs Zeichen erforderlich.',
    cn: '密码太短。最少六个字符。',
    ja: 'パスワードが短すぎます。最小6文字以上を入力してください。',
    ru: 'Пароль слишком короткий. Минимальное количество символов - шесть.',
    ko: '비밀번호가 너무 짧습니다. 최소 6자 이상이어야 합니다.'
  },
  {
    en: 'Verify your account',
    es: 'Verifique su cuenta',
    fr: 'Vérifiez votre compte',
    de: 'Verifizieren Sie Ihr Konto',
    cn: '验证您的帐户',
    ja: 'アカウントの確認',
    ru: 'Подтвердите свою учетную запись',
    ko: '계정을 확인하세요'
  },
  {
    en: 'Unable to verify user. Please try again later',
    es: 'No se puede verificar el usuario. Vuelva a intentarlo más tarde',
    fr: "Impossible de vérifier l'utilisateur. Veuillez réessayer plus tard",
    de: 'Benutzer konnte nicht verifiziert werden. Bitte versuchen Sie es später erneut.',
    cn: '无法验证用户。请稍后重试。',
    ja: 'ユーザーの確認に失敗しました。後でもう一度お試しください。',
    ru: 'Не удалось подтвердить пользователя. Повторите попытку позже',
    ko: '사용자 확인이 불가능합니다. 나중에 다시 시도해주세요.'
  },
  {
    en: 'Account verified successfully!',
    es: 'Cuenta verificada correctamente!',
    fr: 'Compte vérifié avec succès!',
    de: 'Konto erfolgreich verifiziert!',
    cn: '帐户验证成功！',
    ja: 'アカウントの確認に成功しました！',
    ru: 'Учетная запись успешно подтверждена!',
    ko: '계정이 성공적으로 확인되었습니다!'
  },
  {
    en: 'Type words separate with comma',
    es: 'Escriba palabras separadas con coma',
    fr: 'Tapez des mots séparés par une virgule',
    de: 'Geben Sie Wörter durch Kommas getrennt ein',
    cn: '以逗号分隔单词',
    ja: '単語をカンマで区切って入力してください',
    ru: 'Введите слова, разделенные запятыми',
    ko: '단어를 쉼표로 구분하여 입력하세요'
  },
  {
    en: 'Upload favicon',
    es: 'Subir favicon',
    fr: 'Télécharger le favicon',
    de: 'Favicon hochladen',
    cn: '上传网站图标',
    ja: 'ファビコンをアップロード',
    ru: 'Загрузите иконку сайта',
    ko: '파비콘 업로드'
  },
  {
    en: 'Upload logo',
    es: 'Subir logotipo',
    fr: 'Télécharger le logo',
    de: 'Logo hochladen',
    cn: '上传标志',
    ja: 'ロゴをアップロード',
    ru: 'Загрузите логотип',
    ko: '로고 업로드'
  },
  {
    en: 'Unable to save comment.',
    es: 'Incapaz de guardar el comentario.',
    fr: "Impossible d'enregistrer les commentaires.",
    de: 'Kommentar konnte nicht gespeichert werden.',
    cn: '无法保存评论。',
    ja: 'コメントを保存できませんでした。',
    ru: 'Не удалось сохранить комментарий.',
    ko: '댓글 저장 실패'
  },
  {
    en: 'Error occured. Please try again!',
    es: 'Se produjo un error. ¡Vuelva a intentarlo!',
    fr: "Une erreur s'est produite. Veuillez réessayer!",
    de: 'Fehler aufgetreten. Bitte versuchen Sie es erneut!',
    cn: '错误发生。请重试！',
    ja: 'エラーが発生しました。もう一度お試しください！',
    ru: 'Произошла ошибка. Пожалуйста, повторите попытку!',
    ko: '오류가 발생했습니다. 다시 시도해주세요!'
  },
  {
    en: 'Discussion reported!',
    es: 'Discusión reportada!',
    fr: 'Discussion rapportée !',
    de: 'Diskussion gemeldet!',
    cn: '讨论已举报！',
    ja: 'ディスカッションが報告されました！',
    ru: 'Обсуждение сообщено!',
    ko: '토론이 신고되었습니다!'
  },
  {
    en: 'Reporting....',
    es: 'Informes ....',
    fr: 'Reportage ....',
    de: 'Melden....',
    cn: '正在举报....',
    ja: '報告中....',
    ru: 'Отправка отчета....',
    ko: '신고 중....'
  },
  {
    en: 'Error creating post! Please try again.',
    es: '¡Error al crear la publicación! Vuelva a intentarlo.',
    fr: 'Erreur de création de publication! Veuillez réessayer.',
    de: 'Fehler beim Erstellen des Beitrags! Bitte versuchen Sie es erneut.',
    cn: '错误创建帖子！请重试。',
    ja: '投稿の作成にエラーが発生しました！もう一度お試しください。',
    ru: 'Ошибка создания записи! Пожалуйста, повторитепопытку.',
    ko: '게시물 생성 오류! 다시 시도해주세요.'
  },
  {
    en: 'Title is too short!',
    es: '¡El título es demasiado corto!',
    fr: 'Le titre est trop court!',
    de: 'Der Titel ist zu kurz!',
    cn: '标题太短！',
    ja: 'タイトルが短すぎます！',
    ru: 'Заголовок слишком короткий!',
    ko: '제목이 너무 짧습니다!'
  },
  {
    en: 'Please choose a category!',
    es: '¡Elija una categoría!',
    fr: 'Veuillez choisir une catégorie!',
    de: 'Bitte wählen Sie eine Kategorie!',
    cn: '请选择一个分类！',
    ja: 'カテゴリを選択してください！',
    ru: 'Пожалуйста, выберите категорию!',
    ko: '카테고리를 선택해주세요!'
  },
  {
    en: 'Content is blank.',
    es: 'El contenido está en blanco.',
    fr: 'Le contenu est vide.',
    de: 'Der Inhalt ist leer.',
    cn: '内容为空。',
    ja: 'コンテンツが空白です。',
    ru: 'Содержимое пусто.',
    ko: '내용이 비어 있습니다.'
  },
  {
    en: 'You are required to login to access this page',
    es: 'Debe iniciar sesión para accede a esta página',
    fr: 'Vous devez vous connecter pour accéder à cette page',
    de: 'Sie müssen sich anmelden, um auf diese Seite zuzugreifen.',
    cn: '您需要登录才能访问此页面',
    ja: 'このページにアクセスするにはログインが必要です',
    ru: 'Для доступа к этой странице требуется вход в систему',
    ko: '이 페이지에 접근하려면 로그인이 필요합니다'
  },
  {
    en: 'Sign in',
    es: 'Registrarse',
    fr: 'Signer un signe',
    de: 'Anmelden',
    cn: '登录',
    ja: 'サインイン',
    ru: 'Войти',
    ko: '로그인'
  },
  {
    en: 'Sign in to reply',
    fr: 'Se connecter pour répondre',
    es: 'Inicia sesión para responder',
    de: 'Einloggen um zu antworten',
    cn: '登录以回复',
    ja: '返信するにはサインインしてください',
    ko: '답글을 달려면 로그인하세요',
    ru: 'Войдите, чтобы ответить'
  },
  {
    en: 'Security settings',
    fr: 'Paramètres de sécurité',
    es: 'Configuración de seguridad',
    de: 'Sicherheitseinstellungen',
    cn: '安全设置',
    ja: 'セキュリティ設定',
    ko: '보안 설정',
    ru: 'Настройки безопасности'
  },
  {
    en: 'Cloudflare turnstile public key',
    fr: 'Clé publique du tourniquet Cloudflare',
    es: 'Clave pública del torniquete de Cloudflare',
    de: 'Cloudflare-Drehkreuz öffentlicher Schlüssel',
    cn: 'Cloudflare闸机公钥',
    ja: 'Cloudflareターンスタイルの公開鍵',
    ko: 'Cloudflare 회전식 공용 키',
    ru: 'Публичный ключ турникета Cloudflare'
  },
  {
    en: 'Cloudflare turnstile secret key',
    fr: 'Clé secrète du tourniquet Cloudflare',
    es: 'Clave secreta del torniquete de Cloudflare',
    de: 'Geheimer Schlüssel für Cloudflare-Drehkreuz',
    cn: 'Cloudflare闸机密钥',
    ja: 'Cloudflareターンスタイルの秘密キー',
    ko: 'Cloudflare 회전식 보안키',
    ru: 'Секретный ключ турникета Cloudflare'
  },
  {
    en: 'Announcement',
    es: 'Anuncio',
    fr: 'Annonce',
    de: 'Ankündigung',
    cn: '公告',
    ja: 'お知らせ',
    ru: 'Объявление',
    ko: '공지'
  },
  {
    en: 'Announcement text',
    es: 'Texto del anuncio',
    fr: "Texte de l'annonce",
    de: 'Ankündigungstext',
    cn: '公告内容',
    ja: 'お知らせの内容',
    ru: 'Текст объявления',
    ko: '공지 내용'
  },
  {
    en: 'Announcement link',
    es: 'Enlace del anuncio',
    fr: "Lien de l'annonce",
    de: 'Ankündigungslink',
    cn: '公告链接',
    ja: 'お知らせリンク',
    ru: 'Ссылка на объявление',
    ko: '공지 링크'
  },
  {
    en: 'Just now',
    es: 'En este dayjso',
    fr: "Tout à l' heure",
    de: 'Soeben',
    cn: '现在',
    ja: 'ちょうど今',
    ru: 'Прямо сейчас',
    ko: '방금'
  },
  {
    en: 'Unblock user to send messages',
    es: 'Desbloquear usuario para enviar mensajes',
    fr: "Débloquer l'utilisateur pour envoyer des messages",
    de: 'Benutzer freischalten, um Nachrichten zu senden',
    cn: '解除屏蔽用户以发送消息',
    ja: 'メッセージを送信するためにユーザーのブロックを解除する',
    ru: 'Разблокировать пользователя, чтобы отправить сообщение',
    ko: '메시지를 보내려면 사용자 차단을 해제하세요'
  },
  {
    en: 'You can no longer send messages in this chat',
    es: 'Ya no puedes enviar mensajes en este chat',
    fr: 'Vous ne pouvez plus envoyer de messages dans ce chat',
    de: 'Sie können in diesem Chat keine Nachrichten mehr senden',
    cn: '您无法再在此聊天中发送消息',
    ja: 'このチャットでメッセージを送信できなくなりました',
    ru: 'Вы больше не можете отправлять сообщения в этом чате',
    ko: '이 채팅에서 더 이상 메시지를 보낼 수 없습니다'
  },
  {
    en: 'Block',
    es: 'Bloquear',
    fr: 'Bloquer',
    de: 'Blockieren',
    cn: '屏蔽',
    ja: 'ブロック',
    ru: 'Заблокировать',
    ko: '차단'
  },
  {
    en: 'Unblock',
    es: 'Desbloquear',
    fr: 'Débloquer',
    de: 'Entblockieren',
    cn: '解除屏蔽',
    ja: 'ブロック解除',
    ru: 'Разблокировать',
    ko: '차단 해제'
  },
  {
    en: 'Search emoji...',
    es: 'Buscar emoji...',
    fr: 'Rechercher un emoji...',
    de: 'Emoji suchen...',
    cn: '搜索表情...',
    ja: '絵文字を検索...',
    ru: 'Поиск эмодзи...',
    ko: '이모지 검색...'
  },
  {
    en: 'Smileys & Emotions',
    es: 'Emoticonos y Emociones',
    fr: 'Smileys et Émotions',
    de: 'Smileys und Emotionen',
    cn: '表情与情感',
    ja: '笑顔と感情',
    ru: 'Смайлики и Эмоции',
    ko: '스마일리와 감정'
  },
  {
    en: 'People & Body',
    es: 'Personas y Cuerpo',
    fr: 'Personnes et Corps',
    de: 'Menschen und Körper',
    cn: '人与身体',
    ja: '人と体',
    ru: 'Люди и Тело',
    ko: '사람과 몸'
  },
  {
    en: 'Animals & Nature',
    es: 'Animales y Naturaleza',
    fr: 'Animaux et Nature',
    de: 'Tiere und Natur',
    cn: '动物与自然',
    ja: '動物と自然',
    ru: 'Животные и Природа',
    ko: '동물과 자연'
  },
  {
    en: 'Food & Drink',
    es: 'Comida y Bebida',
    fr: 'Nourriture et Boissons',
    de: 'Essen und Trinken',
    cn: '食物与饮品',
    ja: '食べ物と飲み物',
    ru: 'Еда и Напитки',
    ko: '음식과 음료'
  },
  {
    en: 'Travel & Places',
    es: 'Viajes y Lugares',
    fr: 'Voyage et Lieux',
    de: 'Reisen und Orte',
    cn: '旅行与地点',
    ja: '旅行と場所',
    ru: 'Путешествия и Места',
    ko: '여행과 장소'
  },
  {
    en: 'Activities',
    es: 'Actividades',
    fr: 'Activités',
    de: 'Aktivitäten',
    cn: '活动',
    ja: 'アクティビティ',
    ru: 'Мероприятия',
    ko: '활동'
  },
  {
    en: 'Objects',
    es: 'Objetos',
    fr: 'Objets',
    de: 'Objekte',
    cn: '物品',
    ja: '物',
    ru: 'Объекты',
    ko: '물건'
  },
  {
    en: 'Symbols',
    es: 'Símbolos',
    fr: 'Symboles',
    de: 'Symbole',
    cn: '符号',
    ja: '記号',
    ru: 'Символы',
    ko: '기호'
  },
  {
    en: 'Flags',
    es: 'Banderas',
    fr: 'Drapeaux',
    de: 'Flaggen',
    cn: '旗帜',
    ja: '旗',
    ru: 'Флаги',
    ko: '깃발'
  },
  {
    en: 'Homepage settings',
    es: 'Configuración de la página de inicio',
    fr: "Paramètres de la page d'accueil",
    de: 'Startseiteneinstellungen',
    cn: '主页设置',
    ja: 'ホームページ設定',
    ru: 'Настройки главной страницы',
    ko: '홈페이지 설정'
  },
  {
    en: 'Background color',
    es: 'Color de fondo',
    fr: 'Couleur de fond',
    de: 'Hintergrundfarbe',
    cn: '背景颜色',
    ja: '背景色',
    ru: 'Цвет фона',
    ko: '배경색'
  },
  {
    en: 'Banner',
    es: 'Banner',
    fr: 'Bannière',
    de: 'Banner',
    cn: '横幅',
    ja: 'バナー',
    ru: 'Баннер',
    ko: '배너'
  },
  {
    en: 'Upload banner',
    es: 'Subir banner',
    fr: 'Télécharger la bannière',
    de: 'Banner hochladen',
    cn: '上传横幅',
    ja: 'バナーをアップロード',
    ru: 'Загрузить баннер',
    ko: '배너 업로드'
  },
  {
    en: 'Site banner',
    es: 'Banner del sitio',
    fr: 'Bannière du site',
    de: 'Website-Banner',
    cn: '网站横幅',
    ja: 'サイトバナー',
    ru: 'Баннер сайта',
    ko: '사이트 배너'
  },
  {
    en: 'Facebook appId',
    es: 'Facebook appId',
    fr: 'Facebook appId',
    de: 'Facebook appId',
    cn: 'Facebook 应用ID',
    ja: 'FacebookアプリID',
    ru: 'Facebook appId',
    ko: 'Facebook 앱 ID'
  },
  {
    en: 'Github clientId',
    es: 'Github clientId',
    fr: 'Github clientId',
    de: 'Github clientId',
    cn: 'Github 客户端ID',
    ja: 'GithubクライアントID',
    ru: 'Github clientId',
    ko: 'Github 클라이언트 ID'
  },
  {
    en: 'Google clientId',
    es: 'Google clientId',
    fr: 'Google clientId',
    de: 'Google clientId',
    cn: 'Google 客户端ID',
    ja: 'GoogleクライアントID',
    ru: 'Google clientId',
    ko: 'Google 클라이언트 ID'
  },
  {
    en: 'Legal settings',
    es: 'Configuración legal',
    fr: 'Paramètres juridiques',
    de: 'Rechtliche Einstellungen',
    cn: '法律设置',
    ja: '法的設定',
    ru: 'Юридические настройки',
    ko: '법적 설정'
  },
  {
    en: 'Terms & conditions',
    es: 'Términos y condiciones',
    fr: 'Conditions générales',
    de: 'Geschäftsbedingungen',
    cn: '条款和条件',
    ja: '利用規約',
    ru: 'Пользовательское соглашение',
    ko: '이용 약관'
  },
  {
    en: 'Privacy policy',
    es: 'Política de privacidad',
    fr: 'Politique de confidentialité',
    de: 'Datenschutzrichtlinie',
    cn: '隐私政策',
    ja: 'プライバシーポリシー',
    ru: 'Политика конфиденциальности',
    ko: '개인정보 처리방침'
  },
  {
    en: 'Monetization settings',
    es: 'Configuración de monetización',
    fr: 'Paramètres de monétisation',
    de: 'Monetarisierungseinstellungen',
    cn: '盈利设置',
    ja: '収益化設定',
    ru: 'Настройки монетизации',
    ko: '수익화 설정'
  },
  {
    en: 'Analytics',
    es: 'Analíticas',
    fr: 'Analytique',
    de: 'Analysen',
    cn: '分析',
    ja: '分析',
    ru: 'Аналитика',
    ko: '분석'
  },
  {
    en: 'Location',
    es: 'Ubicación',
    fr: 'Localisation',
    de: 'Standort',
    cn: '位置',
    ja: '位置',
    ru: 'Местоположение',
    ko: '위치'
  },
  {
    en: 'URL',
    es: 'URL',
    fr: 'URL',
    de: 'URL',
    cn: '网址',
    ja: 'URL',
    ru: 'URL',
    ko: 'URL'
  },
  {
    en: 'Browser',
    es: 'Navegador',
    fr: 'Navigateur',
    de: 'Browser',
    cn: '浏览器',
    ja: 'ブラウザ',
    ru: 'Браузер',
    ko: '브라우저'
  },
  {
    en: 'Device',
    es: 'Dispositivo',
    fr: 'Appareil',
    de: 'Gerät',
    cn: '设备',
    ja: 'デバイス',
    ru: 'Устройство',
    ko: '기기'
  },
  {
    en: 'Top Devices',
    es: 'Dispositivos principales',
    fr: 'Appareils les plus utilisés',
    de: 'Top-Geräte',
    cn: '热门设备',
    ja: 'トップデバイス',
    ru: 'Топ устройств',
    ko: '인기 기기'
  },
  {
    en: 'Top Browsers',
    es: 'Navegadores principales',
    fr: 'Navigateurs les plus utilisés',
    de: 'Top-Browser',
    cn: '热门浏览器',
    ja: 'トップブラウザ',
    ru: 'Топ браузеров',
    ko: '인기 브라우저'
  },
  {
    en: 'Top Pages',
    es: 'Páginas principales',
    fr: 'Pages les plus visitées',
    de: 'Top-Seiten',
    cn: '热门页面',
    ja: 'トップページ',
    ru: 'Топ страниц',
    ko: '인기 페이지'
  },
  {
    en: 'Top Cities',
    es: 'Ciudades principales',
    fr: 'Villes les plus actives',
    de: 'Top-Städte',
    cn: '热门城市',
    ja: 'トップ都市',
    ru: 'Топ городов',
    ko: '인기 도시'
  },
  {
    en: 'Top Countries',
    es: 'Países principales',
    fr: 'Pays les plus actifs',
    de: 'Top-Länder',
    cn: '热门国家',
    ja: 'トップ国',
    ru: 'Топ стран',
    ko: '인기 국가'
  },
  {
    en: 'Top Sources',
    es: 'Fuentes principales',
    fr: 'Sources les plus utilisées',
    de: 'Top-Quellen',
    cn: '热门来源',
    ja: 'トップソース',
    ru: 'Топ источников',
    ko: '인기 소스'
  },
  {
    en: 'Graph',
    es: 'Gráfico',
    fr: 'Graphique',
    de: 'Diagramm',
    cn: '图表',
    ja: 'グラフ',
    ru: 'График',
    ko: '그래프'
  },
  {
    en: 'Top Activities',
    es: 'Actividades principales',
    fr: 'Activités les plus populaires',
    de: 'Top-Aktivitäten',
    cn: '热门活动',
    ja: 'トップアクティビティ',
    ru: 'Топ активностей',
    ko: '인기 활동'
  },
  {
    en: 'Online users',
    es: 'Usuarios en línea',
    fr: 'Utilisateurs en ligne',
    de: 'Benutzer online',
    cn: '在线用户',
    ja: 'オンラインユーザー',
    ru: 'Пользователи онлайн',
    ko: '온라인 사용자'
  },
  {
    en: 'Themes',
    es: 'Temas',
    fr: 'Thèmes',
    de: 'Themen',
    cn: '主题',
    ja: 'テーマ',
    ru: 'Темы',
    ko: '테마'
  },
  {
    en: 'Create theme',
    es: 'Crear tema',
    fr: 'Créer un thème',
    de: 'Thema erstellen',
    cn: '创建主题',
    ja: 'テーマを作成',
    ru: 'Создать тему',
    ko: '테마 만들기'
  },
  {
    en: 'Update theme',
    es: 'Actualizar tema',
    fr: 'Mettre à jour le thème',
    de: 'Design aktualisieren',
    cn: '更新主题',
    ja: 'テーマを更新',
    ru: 'Обновить тему',
    ko: '테마 업데이트'
  },
  {
    en: 'Theme created successfully!',
    es: '¡Tema creado con éxito!',
    fr: 'Thème créé avec succès !',
    de: 'Design erfolgreich erstellt!',
    cn: '主题创建成功！',
    ja: 'テーマが正常に作成されました！',
    ru: 'Тема успешно создана!',
    ko: '테마가 성공적으로 생성되었습니다!'
  },
  {
    en: 'Theme updated successfully!',
    es: '¡Tema actualizado con éxito!',
    fr: 'Thème mis à jour avec succès !',
    de: 'Design erfolgreich aktualisiert!',
    cn: '主题更新成功！',
    ja: 'テーマが正常に更新されました！',
    ru: 'Тема успешно обновлена!',
    ko: '테마가 성공적으로 업데이트되었습니다!'
  },
  {
    en: 'Unable to create theme. Please try again!',
    es: 'No se pudo crear el tema. ¡Por favor, inténtelo de nuevo!',
    fr: 'Impossible de créer le thème. Veuillez réessayer !',
    de: 'Design konnte nicht erstellt werden. Bitte versuchen Sie es erneut!',
    cn: '无法创建主题。请再试一次！',
    ja: 'テーマを作成できませんでした。もう一度お試しください！',
    ru: 'Не удалось создать тему. Пожалуйста, попробуйте еще раз!',
    ko: '테마를 생성할 수 없습니다. 다시 시도해 주세요!'
  },
  {
    en: 'Unable to update theme. Please try again!',
    es: 'No se pudo actualizar el tema. ¡Por favor, inténtelo de nuevo!',
    fr: 'Impossible de mettre à jour le thème. Veuillez réessayer !',
    de: 'Design konnte nicht aktualisiert werden. Bitte versuchen Sie es erneut!',
    cn: '无法更新主题。请再试一次！',
    ja: 'テーマを更新できませんでした。もう一度お試しください！',
    ru: 'Не удалось обновить тему. Пожалуйста, попробуйте еще раз!',
    ko: '테마를 업데이트할 수 없습니다. 다시 시도해 주세요!'
  },
  {
    en: 'Title is too short. Minimum of 3 characters.',
    es: 'El título es demasiado corto. Mínimo 3 caracteres.',
    fr: 'Le titre est trop court. Minimum de 3 caractères.',
    de: 'Der Titel ist zu kurz. Mindestens 3 Zeichen.',
    cn: '标题太短。至少需要3个字符。',
    ja: 'タイトルが短すぎます。最低3文字必要です。',
    ru: 'Название слишком короткое. Минимум 3 символа.',
    ko: '제목이 너무 짧습니다. 최소 3자 이상이어야 합니다.'
  },
  {
    en: 'Theme code cannot be empty!',
    es: '¡El código del tema no puede estar vacío!',
    fr: 'Le code du thème ne peut pas être vide !',
    de: 'Der Themen-Code darf nicht leer sein!',
    cn: '主题代码不能为空！',
    ja: 'テーマコードは空にできません！',
    ru: 'Код темы не может быть пустым!',
    ko: '테마 코드는 비워둘 수 없습니다!'
  },
  {
    en: 'Edit theme',
    es: 'Editar tema',
    fr: 'Modifier le thème',
    de: 'Thema bearbeiten',
    cn: '编辑主题',
    ja: 'テーマを編集',
    ru: 'Редактировать тему',
    ko: '테마 편집'
  },
  {
    en: 'Inactive',
    es: 'Inactivo',
    fr: 'Inactif',
    de: 'Inaktiv',
    cn: '未激活',
    ja: '非アクティブ',
    ru: 'Неактивно',
    ko: '비활성'
  },
  {
    en: 'You cannot disable the currently active theme. Please enable another theme first to disable this one',
    es: 'No puedes desactivar el tema actualmente activo. Por favor, activa otro tema primero para desactivar este.',
    fr: "Vous ne pouvez pas désactiver le thème actuellement actif. Veuillez d'abord activer un autre thème pour désactiver celui-ci.",
    de: 'Sie können das aktuell aktive Theme nicht deaktivieren. Bitte aktivieren Sie zuerst ein anderes Theme, um dieses zu deaktivieren.',
    cn: '您无法禁用当前启用的主题。请先启用其他主题以禁用此主题。',
    ja: '現在有効なテーマを無効にすることはできません。別のテーマを有効にしてから、このテーマを無効にしてください。',
    ru: 'Вы не можете отключить текущую активную тему. Пожалуйста, сначала включите другую тему, чтобы отключить эту.',
    ko: '현재 활성화된 테마를 비활성화할 수 없습니다. 다른 테마를 먼저 활성화한 후 이 테마를 비활성화하세요.'
  },
  {
    en: 'Signup using Facebook',
    es: 'Regístrate usando Facebook',
    fr: 'Inscription via Facebook',
    de: 'Registrierung mit Facebook',
    cn: '使用 Facebook 注册',
    ja: 'Facebookでサインアップ',
    ru: 'Регистрация через Facebook',
    ko: 'Facebook으로 가입하기'
  },
  {
    en: 'Login using Facebook',
    es: 'Inicia sesión con Facebook',
    fr: 'Connexion via Facebook',
    de: 'Anmelden mit Facebook',
    cn: '使用 Facebook 登录',
    ja: 'Facebookでログイン',
    ru: 'Войти через Facebook',
    ko: 'Facebook으로 로그인'
  },
  {
    en: 'Login using Google',
    es: 'Inicia sesión con Google',
    fr: 'Connexion via Google',
    de: 'Anmelden mit Google',
    cn: '使用 Google 登录',
    ja: 'Googleでログイン',
    ru: 'Войти через Google',
    ko: 'Google로 로그인'
  },
  {
    en: 'Signup using Google',
    es: 'Regístrate con Google',
    fr: 'Inscription via Google',
    de: 'Registrierung mit Google',
    cn: '使用 Google 注册',
    ja: 'Googleでサインアップ',
    ru: 'Регистрация через Google',
    ko: 'Google로 가입하기'
  },
  {
    en: 'Please accept the terms of use and privacy policy',
    es: 'Por favor, acepta los términos de uso y la política de privacidad',
    fr: "Veuillez accepter les conditions d'utilisation et la politique de confidentialité",
    de: 'Bitte akzeptieren Sie die Nutzungsbedingungen und die Datenschutzrichtlinie',
    cn: '请接受使用条款和隐私政策',
    ja: '利用規約とプライバシーポリシーに同意してください',
    ru: 'Пожалуйста, примите условия использования и политику конфиденциальности',
    ko: '이용 약관과 개인정보 처리방침에 동의해 주세요'
  },
  {
    en: "You've been awarded the Favorite Badge for receiving 100+ likes on your posts!",
    es: '¡Has recibido la Insignia Favorita por obtener más de 100 me gusta en tus publicaciones!',
    fr: "Vous avez reçu le Badge Favori pour avoir obtenu plus de 100 j'aime sur vos publications !",
    de: 'Du hast das Favorite-Badge erhalten, weil du mehr als 100 Likes auf deine Beiträge bekommen hast!',
    cn: '您因帖子获得100多个赞而被授予最喜爱徽章！',
    ja: '投稿が100以上いいねを獲得し、お気に入りバッジを授与されました！',
    ru: 'Вы получили значок «Любимчик» за 100+ лайков на ваших постах!',
    ko: '게시물에 100개 이상의 좋아요를 받아 팔로워 배지를 획득하셨습니다!'
  },
  {
    en: "You've been awarded the Devotee Badge!",
    es: '¡Has recibido la Insignia Devoto!',
    fr: 'Vous avez reçu le Badge Dévoué !',
    de: 'Du hast das Devotee-Badge erhalten!',
    cn: '您已被授予忠实粉丝徽章！',
    ja: '献身者バッジを授与されました！',
    ru: 'Вы получили значок «Преданный»!',
    ko: '헌신자 배지를 획득하셨습니다!'
  },
  {
    en: "You've been awarded the Veteran Badge!",
    es: '¡Has recibido la Insignia Veterano!',
    fr: 'Vous avez reçu le Badge Vétéran !',
    de: 'Du hast das Veteran-Badge erhalten!',
    cn: '您已被授予资深用户徽章！',
    ja: 'ベテランバッジを授与されました！',
    ru: 'Вы получили значок «Ветеран»!',
    ko: '베테랑 배지를 획득하셨습니다!'
  },
  {
    en: "You've been awarded the Prolific Writer Badge!",
    es: '¡Has recibido la Insignia de Escritor Prolífico!',
    fr: 'Vous avez reçu le Badge Écrivain Prolifique !',
    de: 'Du hast das Prolific Writer-Badge erhalten!',
    cn: '您已被授予多产作者徽章！',
    ja: '執筆者バッジを授与されました！',
    ru: 'Вы получили значок «Активный автор»!',
    ko: '다작 작가 배지를 획득하셨습니다!'
  },
  {
    en: "You've been awarded the Wordsmith Badge!",
    es: '¡Has recibido la Insignia de Maestro de las Palabras!',
    fr: 'Vous avez reçu le Badge Maître des Mots !',
    de: 'Du hast das Wordsmith-Badge erhalten!',
    cn: '您已被授予文字大师徽章！',
    ja: '言葉の匠バッジを授与されました！',
    ru: 'Вы получили значок «Мастер слова»!',
    ko: '워드스미스 배지를 획득하셨습니다!'
  },
  {
    en: "You've been awarded the People's Choice Badge for receiving 100+ likes on your posts!",
    es: '¡Has recibido la Insignia Elección del Público por obtener más de 100 me gusta en tus publicaciones!',
    fr: "Vous avez reçu le Badge Choix du Public pour avoir obtenu plus de 100 j'aime sur vos publications !",
    de: "Du hast das People's Choice-Badge erhalten, weil du mehr als 100 Likes auf deine Beiträge bekommen hast!",
    cn: '您因帖子获得100多个赞而被授予大众选择徽章！',
    ja: '投稿が100以上いいねを獲得し、ピープルズチョイスバッジを授与されました！',
    ru: 'Вы получили значок «Выбор народа» за 100+ лайков на ваших постах!',
    ko: '게시물에 100개 이상의 좋아요를 받아 피플스 초이스 배지를 획득하셨습니다!'
  },
  {
    en: "You've been awarded the Polymath Badge for providing 1000+ best answers!",
    es: '¡Has recibido la Insignia Polímata por proporcionar más de 1000 mejores respuestas!',
    fr: 'Vous avez reçu le Badge Polymathe pour avoir fourni plus de 1000 meilleures réponses !',
    de: 'Du hast das Polymath-Badge erhalten, weil du mehr als 1000 beste Antworten gegeben hast!',
    cn: '您因提供了1000多个最佳答案而被授予博学徽章！',
    ja: '1000以上のベストアンサーを提供し、ポリマスバッジを授与されました！',
    ru: 'Вы получили значок «Эрудит» за 1000+ лучших ответов!',
    ko: '1000개 이상의 베스트 답변을 제공하여 폴리매스 배지를 획득하셨습니다!'
  },
  {
    en: "You've been awarded the Genius Badge for providing 100+ best answers!",
    es: '¡Has recibido la Insignia Genio por proporcionar más de 100 mejores respuestas!',
    fr: 'Vous avez reçu le Badge Génie pour avoir fourni plus de 100 meilleures réponses !',
    de: 'Du hast das Genius-Badge erhalten, weil du mehr als 100 beste Antworten gegeben hast!',
    cn: '您因提供了100多个最佳答案而被授予天才徽章！',
    ja: '100以上のベストアンサーを提供し、天才バッジを授与されました！',
    ru: 'Вы получили значок «Гений» за 100+ лучших ответов!',
    ko: '100개 이상의 베스트 답변을 제공하여 천재 배지를 획득하셨습니다!'
  },
  {
    en: 'Polymath: Best Answers for 1000+ posts',
    es: 'Polímata: Mejores respuestas en 1000+ publicaciones',
    fr: 'Polymathe : Meilleures réponses pour 1000+ publications',
    de: 'Universalgelehrter: Beste Antworten für 1000+ Beiträge',
    cn: '博学者：1000多个帖子的最佳答案',
    ja: 'ポリマス：1000以上の投稿へのベストアンサー',
    ru: 'Эрудит: Лучшие ответы на 1000+ постов',
    ko: '박식가: 1000개 이상 게시물의 베스트 답변'
  },
  {
    en: 'Genius: Best Answers for 100+ posts',
    es: 'Genio: Mejores respuestas en 100+ publicaciones',
    fr: 'Génie : Meilleures réponses pour 100+ publications',
    de: 'Genie: Beste Antworten für 100+ Beiträge',
    cn: '天才：100多个帖子的最佳答案',
    ja: '天才：100以上の投稿へのベストアンサー',
    ru: 'Гений: Лучшие ответы на 100+ постов',
    ko: '천재: 100개 이상 게시물의 베스트 답변'
  },
  {
    en: 'Favorite: Answered 100+ likes',
    es: 'Favorito: Respuestas con 100+ me gusta',
    fr: "Favori : Réponses avec 100+ j'aime",
    de: 'Favorit: Antworten mit 100+ Likes',
    cn: '最喜爱：回答获得100多个赞',
    ja: 'お気に入り：100以上いいねの回答',
    ru: 'Любимчик: Ответы с 100+ лайков',
    ko: '팔로워: 100개 이상 좋아요를 받은 답변'
  },
  {
    en: "People's choice: 1000+ likes",
    es: 'Elección del público: 1000+ me gusta',
    fr: "Choix du public : 1000+ j'aime",
    de: 'Publikumsliebling: 1000+ Likes',
    cn: '大众选择：1000多个赞',
    ja: 'ピープルズチョイス：1000以上いいね',
    ru: 'Выбор народа: 1000+ лайков',
    ko: '피플스 초이스: 1000개 이상 좋아요'
  },
  {
    en: 'Prolific writer: Wrote 100+ discussions',
    es: 'Escritor prolífico: Escribió 100+ discusiones',
    fr: 'Écrivain prolifique : A écrit 100+ discussions',
    de: 'Prolifischer Autor: Verfasste 100+ Diskussionen',
    cn: '多产作者：撰写了100多个讨论',
    ja: '執筆者：100以上のディスカッションを投稿',
    ru: 'Активный автор: Написал 100+ обсуждений',
    ko: '다작 작가: 100개 이상의 토론 작성'
  },
  {
    en: 'Wordsmith: Wrote 1000+ discussions',
    es: 'Maestro de las palabras: Escribió 1000+ discusiones',
    fr: 'Maître des mots : A écrit 1000+ discussions',
    de: 'Wortkünstler: Verfasste 1000+ Diskussionen',
    cn: '文字大师：撰写了1000多个讨论',
    ja: '言葉の匠：1000以上のディスカッションを投稿',
    ru: 'Мастер слова: Написал 1000+ обсуждений',
    ko: '워드스미스: 1000개 이상의 토론 작성'
  },
  {
    en: 'Veteran: Actively engaged and contributing for 3+ years',
    es: 'Veterano: Participación activa y contribuciones durante 3+ años',
    fr: 'Vétéran : Engagement actif et contributions depuis 3+ ans',
    de: 'Veteran: Seit 3+ Jahren aktiv engagiert und Beitragend',
    cn: '资深用户：积极参与并贡献3年以上',
    ja: 'ベテラン：3年以上の積極的な参加と貢献',
    ru: 'Ветеран: Активное участие и вклад в течение 3+ лет',
    ko: '베테랑: 3년 이상 적극적으로 참여 및 기여'
  },
  {
    en: 'Devotee: Actively engaged and contributing for 1+ years',
    es: 'Devoto: Participación activa y contribuciones durante 1+ años',
    fr: 'Dévoué : Engagement actif et contributions depuis 1+ an',
    de: 'Engagierter Nutzer: Seit 1+ Jahren aktiv engagiert und Beitragend',
    cn: '忠实粉丝：积极参与并贡献1年以上',
    ja: '献身者：1年以上の積極的な参加と貢献',
    ru: 'Преданный: Активное участие и вклад в течение 1+ года',
    ko: '헌신자: 1년 이상 적극적으로 참여 및 기여'
  },
  {
    en: 'mentioned you in their post',
    es: 'te mencionó en su publicación',
    fr: 'vous a mentionné dans son post',
    de: 'hat dich in ihrem Beitrag erwähnt',
    cn: '在他们的帖子中提到了你',
    ja: 'が投稿であなたに言及しました',
    ru: 'упомянул вас в своем посте',
    ko: '게시물에서 당신을 언급했습니다'
  },
  {
    en: 'mentioned you in their comment',
    es: 'te mencionó en su comentario',
    fr: 'vous a mentionné dans son commentaire',
    de: 'hat dich in ihrem Kommentar erwähnt',
    cn: '在他们的评论中提到了你',
    ja: 'がコメントであなたに言及しました',
    ru: 'упомянул вас в своем комментарии',
    ko: '댓글에서 당신을 언급했습니다'
  },
  {
    en: 'mentioned you in their reply',
    es: 'te mencionó en su respuesta',
    fr: 'vous a mentionné dans sa réponse',
    de: 'hat dich in ihrer Antwort erwähnt',
    cn: '在他们的回复中提到了你',
    ja: 'が返信であなたに言及しました',
    ru: 'упомянул вас в своем ответе',
    ko: '답글에서 당신을 언급했습니다'
  },
  {
    en: 'Mention user',
    es: 'Mencionar usuario',
    fr: "Mentionner l'utilisateur",
    de: 'Benutzer erwähnen',
    cn: '提及用户',
    ja: 'ユーザーをメンション',
    ru: 'Упомянуть пользователя',
    ko: '사용자 언급'
  },
  {
    en: 'Search user....',
    es: 'Buscar usuario....',
    fr: 'Rechercher un utilisateur....',
    de: 'Benutzer suchen....',
    cn: '搜索用户....',
    ja: 'ユーザーを検索....',
    ru: 'Поиск пользователя....',
    ko: '사용자 검색....'
  },
  {
    en: '⚠️ Warning: Deleting this comment will also delete all its replies. This action cannot be undone. Are you sure you want to proceed?',
    es: '⚠️ Advertencia: Eliminar este comentario también eliminará todas sus respuestas. Esta acción no se puede deshacer. ¿Estás seguro de que deseas continuar?',
    fr: '⚠️ Avertissement : Supprimer ce commentaire supprimera également toutes ses réponses. Cette action est irréversible. Êtes-vous sûr de vouloir continuer ?',
    de: '⚠️ Warnung: Das Löschen dieses Kommentars löscht auch alle Antworten darauf. Diese Aktion kann nicht rückgängig gemacht werden. Möchten Sie wirklich fortfahren?',
    cn: '⚠️ 警告：删除此评论也将删除其所有回复。此操作无法撤消。您确定要继续吗？',
    ja: '⚠️ 警告：このコメントを削除すると、すべての返信も削除されます。この操作は元に戻せません。本当に続行しますか？',
    ru: '⚠️ Предупреждение: Удаление этого комментария также удалит все ответы на него. Это действие нельзя отменить. Вы уверены, что хотите продолжить?',
    ko: '⚠️ 경고: 이 댓글을 삭제하면 모든 답글도 삭제됩니다. 이 작업은 취소할 수 없습니다. 계속 진행하시겠습니까?'
  },
  {
    en: '⚠️ Warning: This action cannot be undone. Are you sure you want to delete this reply?',
    es: '⚠️ Advertencia: Esta acción no se puede deshacer. ¿Estás seguro de que deseas eliminar esta respuesta?',
    fr: '⚠️ Avertissement : Cette action est irréversible. Êtes-vous sûr de vouloir supprimer cette réponse ?',
    de: '⚠️ Warnung: Diese Aktion kann nicht rückgängig gemacht werden. Möchten Sie diese Antwort wirklich löschen?',
    cn: '⚠️ 警告：此操作无法撤消。您确定要删除此回复吗？',
    ja: '⚠️ 警告：この操作は元に戻せません。この返信を削除してもよろしいですか？',
    ru: '⚠️ Предупреждение: Это действие нельзя отменить. Вы уверены, что хотите удалить этот ответ?',
    ko: '⚠️ 경고: 이 작업은 취소할 수 없습니다. 이 답글을 삭제하시겠습니까?'
  },
  {
    en: 'Click to mark this comment the best response',
    es: 'Haz clic para marcar este comentario como la mejor respuesta',
    fr: 'Cliquez pour marquer ce commentaire comme la meilleure réponse',
    de: 'Klicken Sie, um diesen Kommentar als die beste Antwort zu markieren',
    cn: '点击将此评论标记为最佳回复',
    ja: 'このコメントをベストレスポンスとしてマークするにはクリックしてください',
    ru: 'Нажмите, чтобы отметить этот комментарий как лучший ответ',
    ko: '이 댓글을 최고의 응답으로 표시하려면 클릭하세요'
  },
  {
    en: 'Click to remove this comment as the best response',
    es: 'Haz clic para eliminar este comentario como la mejor respuesta',
    fr: 'Cliquez pour supprimer ce commentaire comme meilleure réponse',
    de: 'Klicken Sie, um diesen Kommentar als beste Antwort zu entfernen',
    cn: '点击移除此评论的最佳回复标记',
    ja: 'このコメントのベストレスポンスを解除するにはクリックしてください',
    ru: 'Нажмите, чтобы убрать этот комментарий как лучший ответ',
    ko: '이 댓글의 최고의 응답 표시를 해제하려면 클릭하세요'
  },
  {
    en: 'Best response',
    es: 'Mejor respuesta',
    fr: 'Meilleure réponse',
    de: 'Beste Antwort',
    cn: '最佳回复',
    ja: 'ベストレスポンス',
    ru: 'Лучший ответ',
    ko: '최고의 응답'
  },
  {
    en: 'Mark best response',
    es: 'Marcar como mejor respuesta',
    fr: 'Marquer comme meilleure réponse',
    de: 'Als beste Antwort markieren',
    cn: '标记为最佳回复',
    ja: 'ベストレスポンスとしてマーク',
    ru: 'Отметить как лучший ответ',
    ko: '최고의 응답으로 표시'
  },
  {
    en: 'Newest',
    es: 'Más nuevo',
    fr: 'Le plus récent',
    de: 'Neueste',
    cn: '最新',
    ja: '最新',
    ru: 'Самый новый'
  },
  {
    en: 'Most Active',
    es: 'Más activo',
    fr: 'Le plus actif',
    de: 'Am aktivsten',
    cn: '最活跃',
    ja: '最も活発',
    ru: 'Самый активный'
  },
  {
    en: 'Extensions',
    es: 'Extensiones',
    fr: 'Extensions',
    de: 'Erweiterungen',
    cn: '扩展',
    ja: '拡張機能',
    ru: 'Расширения'
  },
  {
    en: 'Upload extension',
    es: 'Subir extensión',
    fr: 'Téléverser une extension',
    de: 'Erweiterung hochladen',
    cn: '上传扩展',
    ja: '拡張機能をアップロード',
    ru: 'Загрузить расширение'
  },
  {
    en: 'Please upload valid zip file',
    es: 'Por favor, suba un archivo zip válido',
    fr: 'Veuillez téléverser un fichier zip valide',
    de: 'Bitte laden Sie eine gültige Zip-Datei hoch',
    cn: '请上传有效的zip文件',
    ja: '有効なzipファイルをアップロードしてください',
    ru: 'Пожалуйста, загрузите действительный zip-файл'
  },
  {
    en: 'Error uploading extensions. Please check the extension documentation for support',
    es: 'Error al subir extensiones. Consulte la documentación de la extensión para obtener soporte',
    fr: "Erreur lors du téléversement des extensions. Consultez la documentation de l'extension pour obtenir de l'aide",
    de: 'Fehler beim Hochladen der Erweiterungen. Überprüfen Sie die Dokumentation der Erweiterung für Unterstützung',
    cn: '上传扩展时出错。请查看扩展文档以获取支持',
    ja: '拡張機能のアップロード中にエラーが発生しました。サポートについては拡張機能のドキュメントを確認してください',
    ru: 'Ошибка при загрузке расширений. Проверьте документацию расширения для получения поддержки'
  },
  {
    en: 'Uploading extension....',
    es: 'Subiendo extensión....',
    fr: "Téléversement de l'extension....",
    de: 'Erweiterung wird hochgeladen....',
    cn: '正在上传扩展....',
    ja: '拡張機能をアップロード中....',
    ru: 'Загрузка расширения....'
  },
  {
    en: 'Extension uploaded successfully!',
    es: '¡Extensión subida correctamente!',
    fr: 'Extension téléversée avec succès !',
    de: 'Erweiterung erfolgreich hochgeladen!',
    cn: '扩展上传成功！',
    ja: '拡張機能が正常にアップロードされました！',
    ru: 'Расширение успешно загружено!'
  },
  {
    en: 'Extension variables',
    es: 'Variables de extensión',
    fr: "Variables d'extension",
    de: 'Erweiterungsvariablen',
    cn: '扩展变量',
    ja: '拡張機能の変数',
    ru: 'Переменные расширения'
  },
  {
    en: 'Extension name is required',
    es: 'El nombre de la extensión es obligatorio',
    fr: "Le nom de l'extension est requis",
    de: 'Der Name der Erweiterung ist erforderlich',
    cn: '扩展名称是必填项',
    ja: '拡張機能の名前は必須です',
    ru: 'Название расширения обязательно'
  },
  {
    en: 'Help',
    es: 'Ayuda',
    fr: 'Aide',
    de: 'Hilfe',
    cn: '帮助',
    ja: 'ヘルプ',
    ru: 'Помощь'
  },
  {
    en: 'Note: The name for the extension should be unique, written in lowercase, with no spaces—only hyphens are allowed.',
    es: 'Nota: El nombre de la extensión debe ser único, escrito en minúsculas, sin espacios; solo se permiten guiones.',
    fr: "Remarque : Le nom de l'extension doit être unique, écrit en minuscules, sans espaces—seuls les traits d'union sont autorisés.",
    de: 'Hinweis: Der Name der Erweiterung sollte eindeutig sein, in Kleinbuchstaben geschrieben und ohne Leerzeichen—nur Bindestriche sind erlaubt.',
    cn: '注意：扩展的名称应唯一，使用小写字母书写，不能有空格，只允许使用连字符。',
    ja: '注意：拡張機能の名前は一意である必要があり、小文字で記述し、スペースを入れず、ハイフンのみが許可されます。',
    ru: 'Примечание: Название расширения должно быть уникальным, написано строчными буквами, без пробелов—допускаются только дефисы.'
  },
  {
    en: 'Extension slug name',
    es: 'Nombre del slug de la extensión',
    fr: "Nom du slug de l'extension",
    de: 'Slug-Name der Erweiterung',
    cn: '扩展 slug 名称',
    ja: '拡張機能スラッグ名',
    ru: 'Слаг имени расширения'
  },
  {
    en: 'Add extension',
    es: 'Agregar extensión',
    fr: 'Ajouter une extension',
    de: 'Erweiterung hinzufügen',
    cn: '添加扩展',
    ja: '拡張機能を追加',
    ru: 'Добавить расширение'
  },
  {
    en: 'Are you sure you want to delete this extension?',
    es: '¿Estás seguro de que deseas eliminar esta extensión?',
    fr: 'Êtes-vous sûr de vouloir supprimer cette extension ?',
    de: 'Sind Sie sicher, dass Sie diese Erweiterung löschen möchten?',
    cn: '你确定要删除这个扩展吗？',
    ja: 'この拡張機能を削除してもよろしいですか？',
    ru: 'Вы уверены, что хотите удалить это расширение?'
  },
  {
    en: 'Extension slug name exists. Please use another name.',
    es: 'El nombre del slug de la extensión ya existe. Por favor, use otro nombre.',
    fr: "Le nom du slug de l'extension existe déjà. Veuillez utiliser un autre nom.",
    de: 'Der Slug-Name der Erweiterung existiert bereits. Bitte verwenden Sie einen anderen Namen.',
    cn: '扩展 slug 名称已存在。请使用其他名称。',
    ja: '拡張機能のスラッグ名は既に存在します。別の名前を使用してください。',
    ru: 'Слаг имени расширения уже существует. Пожалуйста, используйте другое имя.'
  },
  {
    en: 'Key',
    es: 'Clave',
    fr: 'Clé',
    de: 'Schlüssel',
    cn: '键',
    ja: 'キー',
    ru: 'Ключ'
  },
  {
    en: 'Value',
    es: 'Valor',
    fr: 'Valeur',
    de: 'Wert',
    cn: '值',
    ja: '値',
    ru: 'Значение'
  },
  {
    en: 'Extension variables',
    es: 'Variables de extensión',
    fr: "Variables d'extension",
    de: 'Erweiterungsvariablen',
    cn: '扩展变量',
    ja: '拡張変数',
    ru: 'Переменные расширения'
  },
  {
    en: 'Subscription',
    es: 'Suscripción',
    fr: 'Abonnement',
    de: 'Abonnement',
    cn: '订阅',
    ja: 'サブスクリプション',
    ru: 'Подписка'
  },
  {
    en: 'Monthly subscription fee',
    es: 'Cuota de suscripción mensual',
    fr: "Frais d'abonnement mensuel",
    de: 'Monatliche Abonnementgebühr',
    cn: '每月订阅费',
    ja: '月額サブスクリプション料金',
    ru: 'Ежемесячная абонентская плата'
  },
  {
    en: 'Subscribe to get access to my exclusive contents via premium posts and priority DM',
    es: 'Suscríbete para acceder a mis contenidos exclusivos a través de publicaciones premium y mensajes directos prioritarios',
    fr: 'Abonnez-vous pour accéder à mes contenus exclusifs via des publications premium et des messages prioritaires',
    de: 'Abonniere, um Zugang zu meinen exklusiven Inhalten über Premium-Posts und priorisierte Nachrichten zu erhalten',
    cn: '订阅以通过高级帖子和优先私信访问我的独家内容',
    ja: 'プレミアム投稿と優先DMを通じて私の独占コンテンツにアクセスするために購読する',
    ru: 'Подпишитесь, чтобы получить доступ к моим эксклюзивным материалам через премиум-посты и приоритетные сообщения'
  },
  {
    en: 'Subscription amount cannot be empty or zero.',
    es: 'El monto de la suscripción no puede estar vacío o ser cero.',
    fr: "Le montant de l'abonnement ne peut pas être vide ou nul.",
    de: 'Der Abonnementbetrag darf nicht leer oder null sein.',
    cn: '订阅金额不能为空或为零。',
    ja: 'サブスクリプションの金額は空またはゼロにすることはできません。',
    ru: 'Сумма подписки не может быть пустой или равной нулю.'
  },
  {
    en: 'Subscription amount is lesser than minimum amount.',
    es: 'El monto de la suscripción es menor que el monto mínimo.',
    fr: "Le montant de l'abonnement est inférieur au montant minimum.",
    de: 'Der Abonnementbetrag ist geringer als der Mindestbetrag.',
    cn: '订阅金额低于最低金额。',
    ja: 'サブスクリプションの金額が最低金額より少ないです。',
    ru: 'Сумма подписки меньше минимальной суммы.'
  },
  {
    en: 'Description is too short. Minimum character is ten.',
    es: 'La descripción es demasiado corta. El mínimo de caracteres es diez.',
    fr: 'La description est trop courte. Le nombre minimum de caractères est de dix.',
    de: 'Die Beschreibung ist zu kurz. Die Mindestanzahl an Zeichen beträgt zehn.',
    cn: '描述太短。最少字符数为十。',
    ja: '説明が短すぎます。最小文字数は10文字です。',
    ru: 'Описание слишком короткое. Минимальное количество символов - десять.'
  },
  {
    en: 'Leave empty or zero, if not applicable',
    es: 'Dejar vacío o cero, si no aplica',
    fr: 'Laisser vide ou zéro, si non applicable',
    de: 'Leer lassen oder null, falls nicht zutreffend',
    cn: '如不适用，请留空或为零',
    ja: '該当しない場合は空またはゼロのままにしてください',
    ru: 'Оставьте пустым или нулем, если не применимо'
  },
  {
    en: 'Payment settings',
    es: 'Configuración de pagos',
    fr: 'Paramètres de paiement',
    de: 'Zahlungseinstellungen',
    cn: '支付设置',
    ja: '支払い設定',
    ru: 'Настройки оплаты'
  },
  {
    en: 'Currency',
    es: 'Moneda',
    fr: 'Devise',
    de: 'Währung',
    cn: '货币',
    ja: '通貨',
    ru: 'Валюта'
  },
  {
    en: 'Choose one',
    es: 'Elige uno',
    fr: 'Choisissez-en un',
    de: 'Wähle eins',
    cn: '选择一个',
    ja: '1つ選んでください',
    ru: 'Выберите один'
  },
  {
    en: 'Premium access fee (monthly)',
    es: 'Cuota de acceso premium (mensual)',
    fr: "Frais d'accès premium (mensuel)",
    de: 'Premium-Zugangsgebühr (monatlich)',
    cn: '高级访问费（月度）',
    ja: 'プレミアムアクセス料金（月額）',
    ru: 'Плата за премиум-доступ (ежемесячно)'
  },
  {
    en: 'User subscription fee (monthly)',
    es: 'Cuota de suscripción del usuario (mensual)',
    fr: "Frais d'abonnement utilisateur (mensuel)",
    de: 'Benutzerabonnementgebühr (monatlich)',
    cn: '用户订阅费（月度）',
    ja: 'ユーザーのサブスクリプション料金（月額）',
    ru: 'Абонентская плата пользователя (ежемесячно)'
  },
  {
    en: 'Percentage',
    es: 'Porcentaje',
    fr: 'Pourcentage',
    de: 'Prozentsatz',
    cn: '百分比',
    ja: '割合',
    ru: 'Процент'
  },
  {
    en: 'Note: Payment received by the user when others subscribe to their premium content',
    es: 'Nota: Pago recibido por el usuario cuando otros se suscriben a su contenido premium',
    fr: "Remarque : Paiement reçu par l'utilisateur lorsque d'autres s'abonnent à leur contenu premium",
    de: 'Hinweis: Zahlung, die der Benutzer erhält, wenn andere ihr Premium-Inhalt abonnieren',
    cn: '注意：用户在其他人订阅其高级内容时收到的付款',
    ja: '注：他のユーザーがプレミアムコンテンツを購読すると、ユーザーが受け取る支払い',
    ru: 'Примечание: Платеж, полученный пользователем, когда другие подписываются на их премиум-контент'
  },
  {
    en: 'Minimum amount',
    es: 'Cantidad mínima',
    fr: 'Montant minimum',
    de: 'Mindestbetrag',
    cn: '最低金额',
    ja: '最低金額',
    ru: 'Минимальная сумма'
  },
  {
    en: 'Message',
    es: 'Mensaje',
    fr: 'Message',
    de: 'Nachricht',
    cn: '信息',
    ja: 'メッセージ',
    ru: 'Сообщение'
  },
  {
    en: 'Subscribe',
    es: 'Suscribirse',
    fr: "S'abonner",
    de: 'Abonnieren',
    cn: '订阅',
    ja: '購読する',
    ru: 'Подписаться'
  },
  {
    en: 'Free or Premium?',
    es: '¿Gratis o Premium?',
    fr: 'Gratuit ou Premium?',
    de: 'Kostenlos oder Premium?',
    cn: '免费还是高级？',
    ja: '無料またはプレミアム？',
    ru: 'Бесплатно или Премиум?'
  },
  {
    en: 'For everyone',
    es: 'Para todos',
    fr: 'Pour tout le monde',
    de: 'Für alle',
    cn: '为所有人',
    ja: 'みんなのために',
    ru: 'Для всех'
  },
  {
    en: 'For my subscribers',
    es: 'Para mis suscriptores',
    fr: 'Pour mes abonnés',
    de: 'Für meine Abonnenten',
    cn: '给我的订阅者',
    ja: '私の購読者のために',
    ru: 'Для моих подписчиков'
  },
  {
    en: 'Percentage charged on user subscription fee',
    es: 'Porcentaje cobrado en la tarifa de suscripción del usuario',
    fr: "Pourcentage facturé sur les frais d'abonnement de l'utilisateur",
    de: 'Prozentsatz, der auf die Abonnementgebühr des Benutzers erhoben wird',
    cn: '用户订阅费用的百分比',
    ja: 'ユーザーのサブスクリプション料金に対する課金率',
    ru: 'Процент, взимаемый с абонентской платы пользователя'
  },
  {
    en: 'Premium',
    es: 'Prima',
    fr: 'Prime',
    de: 'Prämie',
    cn: '高级',
    ja: 'プレミアム',
    ru: 'Премиум'
  },
  {
    en: 'Premium post',
    es: 'Publicación premium',
    fr: 'Publication premium',
    de: 'Premium-Beitrag',
    cn: '高级帖子',
    ja: 'プレミアム投稿',
    ru: 'Премиум пост'
  },
  {
    en: 'Icon',
    es: 'Icono',
    fr: 'Icône',
    de: 'Symbol',
    cn: '图标',
    ja: 'アイコン',
    ru: 'Иконка'
  },
  {
    en: 'Transactions',
    es: 'Transacciones',
    fr: 'Transactions',
    de: 'Transaktionen',
    cn: '交易',
    ja: '取引',
    ru: 'Транзакции'
  },
  {
    en: 'Subscriptions',
    es: 'Suscripciones',
    fr: 'Abonnements',
    de: 'Abonnements',
    cn: '订阅',
    ja: 'サブスクリプション',
    ru: 'Подписки'
  },
  {
    en: 'Amount',
    es: 'Cantidad',
    fr: 'Montant',
    de: 'Betrag',
    cn: '金额',
    ja: '金額',
    ru: 'Сумма'
  },
  {
    en: 'Narration',
    es: 'Narración',
    fr: 'Narration',
    de: 'Erzählung',
    cn: '叙述',
    ja: 'ナレーション',
    ru: 'Повествование'
  },
  {
    en: 'Success',
    es: 'Éxito',
    fr: 'Succès',
    de: 'Erfolg',
    cn: '成功',
    ja: '成功',
    ru: 'Успех'
  },
  {
    en: 'Failure',
    es: 'Fracaso',
    fr: 'Échec',
    de: 'Fehler',
    cn: '失败',
    ja: '失敗',
    ru: 'Неудача'
  },
  {
    en: 'Pending',
    es: 'Pendiente',
    fr: 'En attente',
    de: 'Ausstehend',
    cn: '待定',
    ja: '保留中',
    ru: 'В ожидании'
  },
  {
    en: 'Subscribers',
    es: 'Suscriptores',
    fr: 'Abonnés',
    de: 'Abonnenten',
    cn: '订阅者',
    ja: '購読者',
    ru: 'Подписчики'
  },
  {
    en: 'Get access',
    es: 'Obtener acceso',
    fr: "Obtenir l'accès",
    de: 'Zugang erhalten',
    cn: '获取访问权限',
    ja: 'アクセスを取得',
    ru: 'Получить доступ'
  },
  {
    en: 'Subscription is required to access premium content',
    es: 'Se requiere suscripción para acceder al contenido premium',
    fr: "L'abonnement est requis pour accéder au contenu premium",
    de: 'Ein Abonnement ist erforderlich, um auf Premium-Inhalte zuzugreifen',
    cn: '需要订阅才能访问高级内容',
    ja: 'プレミアムコンテンツにアクセスするにはサブスクリプションが必要です',
    ru: 'Для доступа к премиум-контенту требуется подписка'
  },
  {
    en: 'Subscribed',
    es: 'Suscrito',
    fr: 'Abonné',
    de: 'Abonniert',
    cn: '已订阅',
    ja: '購読中',
    ru: 'Подписан'
  },
  {
    en: 'This month',
    es: 'Este mes',
    fr: 'Ce mois-ci',
    de: 'Diesen Monat',
    cn: '这个月',
    ja: '今月',
    ru: 'Этот месяц'
  },
  {
    en: 'Last month',
    es: 'El mes pasado',
    fr: 'Le mois dernier',
    de: 'Letzten Monat',
    cn: '上个月',
    ja: '先月',
    ru: 'В прошлом месяце'
  },
  {
    en: '2 months ago',
    es: 'hace 2 meses',
    fr: 'il y a 2 mois',
    de: 'vor 2 Monaten',
    cn: '2个月前',
    ja: '2ヶ月前',
    ru: '2 месяца назад'
  },
  {
    en: '3 months ago',
    es: 'hace 3 meses',
    fr: 'il y a 3 mois',
    de: 'vor 3 Monaten',
    cn: '3个月前',
    ja: '3ヶ月前',
    ru: '3 месяца назад'
  },
  {
    en: '4 months ago',
    es: 'hace 4 meses',
    fr: 'il y a 4 mois',
    de: 'vor 4 Monaten',
    cn: '4个月前',
    ja: '4ヶ月前',
    ru: '4 месяца назад'
  },
  {
    en: '5 months ago',
    es: 'hace 5 meses',
    fr: 'il y a 5 mois',
    de: 'vor 5 Monaten',
    cn: '5个月前',
    ja: '5ヶ月前',
    ru: '5 месяца назад'
  },
  {
    en: '6 months ago',
    es: 'hace 6 meses',
    fr: 'il y a 6 mois',
    de: 'vor 6 Monaten',
    cn: '6个月前',
    ja: '6ヶ月前',
    ru: '6 месяца назад'
  },
  {
    en: '1 year ago',
    es: 'hace 1 año',
    fr: 'il y a 1 an',
    de: 'vor 1 Jahr',
    cn: '1年前',
    ja: '1年前',
    ru: '1 год назад'
  },
  {
    en: 'Pinned post',
    es: 'Publicación fijada',
    fr: 'Post épinglé',
    de: 'Angehefteter Beitrag',
    cn: '置顶帖子',
    ja: '固定された投稿',
    ru: 'Закрепленный пост',
    ko: '고정된 게시물'
  },
  {
    en: 'Locked post',
    es: 'Publicación bloqueada',
    fr: 'Publication verrouillée',
    de: 'Gesperrter Beitrag',
    cn: '锁定的帖子',
    ja: 'ロックされた投稿',
    ru: 'Заблокированный пост',
    ko: '잠긴 게시물'
  },
  {
    en: 'Background color',
    es: 'Color de fondo',
    fr: 'Couleur de fond',
    de: 'Hintergrundfarbe',
    cn: '背景颜色',
    ja: '背景色',
    ru: 'Цвет фона',
    ko: '배경 색상'
  },
  {
    en: 'Background image (optional)',
    es: 'Imagen de fondo (opcional)',
    fr: 'Image de fond (facultatif)',
    de: 'Hintergrundbild (optional)',
    cn: '背景图片（可选）',
    ja: '背景画像（オプション）',
    ru: 'Фоновое изображение (необязательно)',
    ko: '배경 이미지 (선택 사항)'
  },
  {
    en: 'Background image (optional)',
    es: 'Imagen de fondo (opcional)',
    fr: 'Image de fond (facultatif)',
    de: 'Hintergrundbild (optional)',
    cn: '背景图片（可选）',
    ja: '背景画像（オプション）',
    ru: 'Фоновое изображение (необязательно)',
    ko: '배경 이미지 (선택 사항)'
  },
  {
    en: 'Homepage text',
    es: 'Texto de la página de inicio',
    fr: "Texte de la page d'accueil",
    de: 'Startseitentext',
    cn: '主页文本',
    ja: 'ホームページのテキスト',
    ru: 'Текст главной страницы',
    ko: '홈페이지 텍스트'
  },
  {
    en: 'Upload',
    es: 'Subir',
    fr: 'Télécharger',
    de: 'Hochladen',
    cn: '上传',
    ja: 'アップロード',
    ru: 'Загрузить',
    ko: '업로드'
  },
  {
    en: 'Your post has been banned by a moderator due to a privacy violation.',
    es: 'Tu publicación ha sido prohibida por un moderador debido a una violación de privacidad.',
    fr: "Votre publication a été interdite par un modérateur en raison d'une violation de la vie privée.",
    de: 'Ihr Beitrag wurde von einem Moderator wegen eines Datenschutzverstoßes gesperrt.',
    cn: '由于隐私违规，您的帖子已被版主禁止。',
    ja: 'プライバシー違反のため、モデレーターによってあなたの投稿が禁止されました。',
    ru: 'Ваш пост был заблокирован модератором из-за нарушения конфиденциальности.',
    ko: '개인정보 침해로 인해 귀하의 게시물이 중재자에 의해 금지되었습니다.'
  },
  {
    en: '2FA Login',
    es: 'Inicio de sesión 2FA',
    fr: 'Connexion 2FA',
    de: '2FA-Anmeldung',
    cn: '2FA登录',
    ja: '2FAログイン',
    ru: '2FA Вход',
    ko: '2FA 로그인'
  },
  {
    en: 'Expired code',
    es: 'Código caducado',
    fr: 'Code expiré',
    de: 'Abgelaufener Code',
    cn: '过期代码',
    ja: '期限切れのコード',
    ru: 'Просроченный код',
    ko: '만료된 코드'
  },
  {
    en: 'Get a new code',
    es: 'Obtener un nuevo código',
    fr: 'Obtenir un nouveau code',
    de: 'Einen neuen Code erhalten',
    cn: '获取新代码',
    ja: '新しいコードを取得',
    ru: 'Получить новый код',
    ko: '새 코드 받기'
  },
  {
    en: 'Verification code sent to your email!',
    es: '¡Código de verificación enviado a tu correo electrónico!',
    fr: 'Code de vérification envoyé à votre e-mail !',
    de: 'Bestätigungscode an Ihre E-Mail gesendet!',
    cn: '验证码已发送到您的电子邮件！',
    ja: '確認コードがあなたのメールに送信されました！',
    ru: 'Код подтверждения отправлен на вашу электронную почту!',
    ko: '인증 코드가 이메일로 전송되었습니다!'
  },
  {
    en: 'Discussion UI',
    es: 'Interfaz de discusión',
    fr: 'Interface de discussion',
    de: 'Diskussions-Benutzeroberfläche',
    cn: '讨论界面',
    ja: 'ディスカッションUI',
    ru: 'Интерфейс обсуждения',
    ko: '토론 인터페이스'
  },
  {
    en: 'Social',
    es: 'Social',
    fr: 'Social',
    de: 'Sozial',
    cn: '社交',
    ja: 'ソーシャル',
    ru: 'Социальный',
    ko: '사회적인'
  },
  {
    en: 'Twitter / Facebook style',
    es: 'Estilo de Twitter / Facebook',
    fr: 'Style Twitter / Facebook',
    de: 'Twitter / Facebook-Stil',
    cn: '推特/脸书风格',
    ja: 'Twitter / Facebookスタイル',
    ru: 'Стиль Twitter / Facebook',
    ko: '트위터 / 페이스북 스타일'
  },
  {
    en: 'Minforum style',
    es: 'Estilo Minforum',
    fr: 'Style Minforum',
    de: 'Minforum-Stil',
    cn: 'Minforum 风格',
    ja: 'Minforumスタイル',
    ru: 'Стиль Minforum',
    ko: 'Minforum 스타일'
  },
  {
    en: 'Classic Forum UI',
    es: 'Interfaz de Foro Clásico',
    fr: 'Interface de Forum Classique',
    de: 'Klassische Forum-Benutzeroberfläche',
    cn: '经典论坛界面',
    ja: 'クラシックフォーラムUI',
    ru: 'Классический интерфейс форума',
    ko: '클래식 포럼 UI'
  },
  {
    en: 'Classic',
    es: 'Clásico',
    fr: 'Classique',
    de: 'Klassisch',
    cn: '经典',
    ja: 'クラシック',
    ru: 'Классический',
    ko: '클래식'
  },
  {
    en: 'Default',
    es: 'Predeterminado',
    fr: 'Par défaut',
    de: 'Standard',
    cn: '默认',
    ja: 'デフォルト',
    ru: 'По умолчанию',
    ko: '기본값'
  },
  {
    en: 'Table',
    es: 'Tabla',
    fr: 'Tableau',
    de: 'Tabelle',
    cn: '表格',
    ja: '表',
    ru: 'Таблица',
    ko: '표'
  }
];

export default dict;
