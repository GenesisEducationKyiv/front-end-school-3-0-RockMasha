# SECURITY AUDIT REPORT

## Загальний підсумок

* **Всього залежностей**: 263 (Production – 72, Development – 191)
* **Виявлені вразливості (`npm audit`)**: 2

  * `brace-expansion` – *Low* (непряма)
  * `vite` – *Moderate* (пряма)
* **Статус після `npm audit fix`**: **Всі проблеми виправлені**
* **Snyk**: перевірка успішна, **жодних уразливих шляхів не виявлено**
* **Supply chain ризики (`Socket.dev`)**:
  * `axios` — 4 supply chain вразливості  
  * `vite` — 22 supply chain вразливості  

---

## Dependencies

> ✅ — без вразливостей після npm audit та snyk test
> 💠 — була вразливість, виправлено
> 🔗 - supply chain вразливость

| Пакет              | Версія   | Статус |
| ------------------ | -------- | ------ |
| @mobily/ts-belt    | ^3.13.1  | ✅      | 
| axios              | ^1.8.4   | ✅/🔗      |
| formik             | ^2.4.6   | ✅      |
| modern-normalize   | ^3.0.1   | ✅      |
| neverthrow         | ^8.2.0   | ✅      |
| react              | ^19.0.0  | ✅      |
| react-dom          | ^19.0.0  | ✅      |
| react-hot-toast    | ^2.5.2   | ✅      |
| react-paginate     | ^8.3.0   | ✅      |
| react-router-dom   | ^7.6.2   | ✅      |
| react-spinners     | ^0.17.0  | ✅      |
| reset-css          | ^5.0.2   | ✅      | 
| styled-components  | ^6.1.17  | ✅      | 
| zod                | ^3.25.49 | ✅      | 
| zod-formik-adapter | ^1.3.0   | ✅      | 

---

## DevDependencies


| Пакет                       | Версія    | Статус |
| --------------------------- | --------- | ------ | 
| @eslint/js                  | ^9.22.0   | ✅      | 
| @tsconfig/vite-react        | ^6.3.5    | ✅      | 
| @types/node                 | ^22.15.29 | ✅      | 
| @types/react                | ^19.1.6   | ✅      |
| @types/react-dom            | ^19.1.5   | ✅      |
| @vitejs/plugin-react        | ^4.3.4    | ✅      |
| eslint                      | ^9.22.0   | ✅      | 
| eslint-plugin-react-hooks   | ^5.2.0    | ✅      | 
| eslint-plugin-react-refresh | ^0.4.19   | ✅      |
| globals                     | ^16.0.0   | ✅      | 
| prettier                    | ^3.5.3    | ✅      | 
| typescript                  | ^5.8.3    | ✅      | 
| vite                        | ^6.3.1    | 💠/🔗     | 

---

## Деталі виявлених вразливостей (npm audit)

### 1. `brace-expansion` – Low

* **Тип**: Regular Expression Denial of Service (ReDoS)
* **Опис**: Зловмисник міг викликати надмірне споживання ресурсів при специфічному шаблоні розширення.
* **CWE**: [CWE-400](https://cwe.mitre.org/data/definitions/400.html)
* **Джерело**: [GHSA-v6h2-p8h4-qcjw](https://github.com/advisories/GHSA-v6h2-p8h4-qcjw)
* **Виправлено**: ✅

---

### 2. `vite` – Moderate

* **Тип**: Path Traversal
* **Опис**: Обхід `server.fs.deny` в певних версіях дозволяв доступ до небезпечних файлів.
* **CWE**: [CWE-22](https://cwe.mitre.org/data/definitions/22.html)
* **Джерело**: [GHSA-859w-5945-r5v3](https://github.com/advisories/GHSA-859w-5945-r5v3)
* **Виправлено**: ✅


---

## чек zero-day вразливостей:

* **Snyk**: `snyk test` показав 0 вразливостей
* **Результат перевірки**: Жодних zero-day вразливостей не виявлено.


## чек supply chain вразливостей за допомогою Socket.dev:

* **axios**: 4 supply chain вразливості (Network access - 3, Uses eval - 1)
* **vite**: показав 22 вразливості (Network access - 7, Uses eval - 4, Shell access - 9, Native code, Install scripts - 2)
* **@mobily/ts-belt**: немає даних

---

## Шлях перевірки та фіксу:

* `npm audit` показав 2 вразливостей
* `npm audit fix` пофікшено, показав 0 вразливостей
* `snyk test` показав 0 вразливостей
* `Socket.dev` вразливості у бібліотеках axios та vite

