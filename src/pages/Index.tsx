import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground">Конструктор акций</div>
          <Button variant="default" size="lg">
            Попробовать
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-6 py-24 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Конструктор акций для роста продаж и автоматизации маркетинга
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Собирайте акции под любые задачи — без кода и ручной рутины
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8">
              Попробовать демо
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Обсудить задачу
            </Button>
          </div>

          <div className="pt-12 animate-fade-in-delayed">
            <Card className="p-8 bg-white shadow-lg">
              <div className="grid grid-cols-3 gap-6 text-sm">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    Условия
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-secondary rounded-lg text-left">
                      <Icon name="Users" size={16} className="inline mr-2 text-primary" />
                      Сегмент: VIP клиенты
                    </div>
                    <div className="p-3 bg-secondary rounded-lg text-left">
                      <Icon name="ShoppingCart" size={16} className="inline mr-2 text-primary" />
                      Сумма от 5000 ₽
                    </div>
                    <div className="p-3 bg-secondary rounded-lg text-left">
                      <Icon name="Calendar" size={16} className="inline mr-2 text-primary" />
                      01.12 — 31.12
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Icon name="ArrowRight" size={32} className="text-muted-foreground" />
                </div>

                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    Вознаграждение
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-primary/10 rounded-lg text-left border border-primary/20">
                      <Icon name="Gift" size={16} className="inline mr-2 text-primary" />
                      Скидка 15%
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg text-left border border-primary/20">
                      <Icon name="Sparkles" size={16} className="inline mr-2 text-primary" />
                      +500 бонусов
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Что такое конструктор акций
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Инструмент для создания и управления маркетинговыми акциями. Работает автоматически 
              по условиям, датам и событиям. Подходит для разных целей: привлечение новых клиентов, 
              удержание существующих, рост среднего чека.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-8">
              <Card className="flex-1 p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
                <Icon name="Filter" size={32} className="mx-auto text-primary" />
                <div className="font-semibold">Условия</div>
                <div className="text-sm text-muted-foreground">
                  Кто, что, когда покупает
                </div>
              </Card>

              <Icon name="ArrowRight" size={24} className="text-muted-foreground flex-shrink-0" />

              <Card className="flex-1 p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
                <Icon name="Zap" size={32} className="mx-auto text-primary" />
                <div className="font-semibold">Логика</div>
                <div className="text-sm text-muted-foreground">
                  Автоматическая проверка
                </div>
              </Card>

              <Icon name="ArrowRight" size={24} className="text-muted-foreground flex-shrink-0" />

              <Card className="flex-1 p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
                <Icon name="TrendingUp" size={32} className="mx-auto text-primary" />
                <div className="font-semibold">Результат</div>
                <div className="text-sm text-muted-foreground">
                  Вознаграждение клиенту
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Из чего собирается акция
            </h2>
            <p className="text-lg text-muted-foreground">
              Модульная система для любых маркетинговых сценариев
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 space-y-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Участники</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Сегменты, фильтры, RFM-группы. Выберите аудиторию для акции.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="ShoppingBag" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Условия покупки</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Товары, сумма, количество, время, место. Настройте правила срабатывания.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Триггеры</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Дата, событие, периодичность. Запустите акцию в нужный момент.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Gift" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Вознаграждение</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Скидки, бонусы, подарок, фиксированная цена. Определите выгоду клиента.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Ограничения</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Лимиты, приоритеты, совместимость. Контролируйте расходы на акции.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Layers" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Приоритеты</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Управление конфликтами акций. Решите, какая акция важнее.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Какие задачи решает
            </h2>
            <p className="text-lg text-muted-foreground">
              Готовые сценарии для разных бизнес-целей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "UserPlus", title: "Вернуть спящих клиентов", desc: "Автоматическая акция для неактивных пользователей" },
              { icon: "TrendingUp", title: "Увеличить средний чек", desc: "Скидки и бонусы при превышении суммы заказа" },
              { icon: "RefreshCw", title: "Стимулировать повторные покупки", desc: "Персональные предложения после первой покупки" },
              { icon: "Calendar", title: "Запустить временное промо", desc: "Акции с четкими датами начала и окончания" },
              { icon: "Target", title: "Сделать персональное предложение", desc: "Индивидуальные условия для сегментов клиентов" },
              { icon: "Award", title: "Поощрить лояльных", desc: "Специальные условия для VIP и постоянных клиентов" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={20} className="text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Автоматизация и контроль
            </h2>
            <p className="text-lg text-muted-foreground">
              Акции работают сами — вы следите за результатами
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Icon name="Play" size={20} className="text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Автозапуск</div>
                      <div className="text-sm text-muted-foreground">По дате и времени</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <Icon name="StopCircle" size={20} className="text-red-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Автостоп</div>
                      <div className="text-sm text-muted-foreground">При достижении лимита</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Icon name="Activity" size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Статусы</div>
                      <div className="text-sm text-muted-foreground">Активна / запланирована / завершена</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Новогодняя акция</span>
                      <span className="text-xs px-2 py-1 bg-green-500 text-white rounded-full">Активна</span>
                    </div>
                    <div className="text-xs text-muted-foreground">01.12.2024 — 31.12.2024</div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Весенняя распродажа</span>
                      <span className="text-xs px-2 py-1 bg-gray-400 text-white rounded-full">Запланирована</span>
                    </div>
                    <div className="text-xs text-muted-foreground">01.03.2025 — 31.03.2025</div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Чёрная пятница</span>
                      <span className="text-xs px-2 py-1 bg-gray-600 text-white rounded-full">Завершена</span>
                    </div>
                    <div className="text-xs text-muted-foreground">24.11.2024 — 30.11.2024</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Аналитика
            </h2>
            <p className="text-lg text-muted-foreground">
              Видно, что работает
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Выручка</div>
                  <div className="text-3xl font-bold text-foreground">2.4М ₽</div>
                  <div className="flex items-center justify-center gap-1 text-green-600 text-sm">
                    <Icon name="TrendingUp" size={16} />
                    <span>+23%</span>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Расходы</div>
                  <div className="text-3xl font-bold text-foreground">360К ₽</div>
                  <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
                    <Icon name="Minus" size={16} />
                    <span>15%</span>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Покупок</div>
                  <div className="text-3xl font-bold text-foreground">1 847</div>
                  <div className="flex items-center justify-center gap-1 text-green-600 text-sm">
                    <Icon name="TrendingUp" size={16} />
                    <span>+34%</span>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">ROMI</div>
                  <div className="text-3xl font-bold text-primary">6.7×</div>
                  <div className="flex items-center justify-center gap-1 text-green-600 text-sm">
                    <Icon name="TrendingUp" size={16} />
                    <span>+18%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Интеграция с рассылками
            </h2>
            <p className="text-lg text-muted-foreground">
              Акция — часть персонального сообщения
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center justify-between gap-8">
                <div className="flex-1 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div className="font-semibold text-lg">Сообщение</div>
                  <div className="text-sm text-muted-foreground">
                    Email, SMS, push с персональным предложением
                  </div>
                </div>

                <Icon name="ArrowRight" size={32} className="text-muted-foreground flex-shrink-0" />

                <div className="flex-1 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="ShoppingCart" size={24} className="text-primary" />
                  </div>
                  <div className="font-semibold text-lg">Покупка</div>
                  <div className="text-sm text-muted-foreground">
                    Клиент выполняет условия акции
                  </div>
                </div>

                <Icon name="ArrowRight" size={32} className="text-muted-foreground flex-shrink-0" />

                <div className="flex-1 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Gift" size={24} className="text-primary" />
                  </div>
                  <div className="font-semibold text-lg">Вознаграждение</div>
                  <div className="text-sm text-muted-foreground">
                    Автоматическое начисление бонусов
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground">
                  <Icon name="Info" size={16} className="inline mr-2" />
                  Акция срабатывает только при доставке сообщения и выполнении всех условий
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Попробуйте конструктор акций
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Запустите первую акцию за 15 минут или обсудите вашу задачу с экспертом
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Посмотреть демо
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
              Обсудить задачу
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div>© 2024 Конструктор акций</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Документация</a>
              <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
              <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
